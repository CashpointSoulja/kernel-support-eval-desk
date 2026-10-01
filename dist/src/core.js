const routeRules = [
  ['needs-human', ['billing','contract','refund','legal']],
  ['data-quality issue', ['merged','merge','parent','holding','brand','subsidiary','branch','wrong']],
  ['API troubleshooting', ['api','rate limit','credential','retry','429']],
  ['docs-answerable', ['processing','enrichment','export','identity','field']]
];
export const tokens = value => [...new Set((value.toLowerCase().match(/[a-z0-9]+/g)||[]).filter(x => x.length > 2))];
export function routeTicket(text) {
  const lower=text.toLowerCase();
  for (const [route, words] of routeRules) {
    const matches=words.filter(w=>lower.includes(w));
    if(matches.length) return {route,matches,confidence:matches.length>1?'high':'medium',reason:`Matched ${matches.length} routing signal${matches.length>1?'s':''}.`};
  }
  return {route:'needs-human',matches:[],confidence:'low',reason:'No reliable routing signals were found.'};
}
export function retrieve(query, docs, threshold=.16) {
  const q=tokens(query);
  return docs.map(doc=>{const d=tokens(`${doc.title} ${doc.text}`); const overlap=q.filter(x=>d.includes(x)).length; return {...doc,score:q.length?overlap/Math.sqrt(q.length*d.length):0};})
    .filter(x=>x.score>=threshold).sort((a,b)=>b.score-a.score).slice(0,3);
}
export function draftReply(ticket, docs) {
  const hits=retrieve(`${ticket.subject} ${ticket.body}`,docs);
  if(!hits.length) return {abstained:true,text:'Needs context / hand off. Please provide the affected demo identifier, expected outcome, observed outcome, and a supporting source link.',citations:[],hits:[]};
  const citations=hits.map(x=>`${x.id}#${x.section}`);
  return {abstained:false,text:`Thanks for the report. The relevant guidance says: ${hits.map(x=>`“${x.text}” [${x.id}#${x.section}]`).join(' ')}`,citations,hits};
}
export function similarity(a,b){const x=tokens(a),y=tokens(b);if(!x.length&&!y.length)return 1;const overlap=x.filter(t=>y.includes(t)).length;return overlap/new Set([...x,...y]).size;}
export function findDuplicate(report,reports,threshold=.28){return reports.map(x=>({...x,similarity:similarity(`${report.reported} ${report.expected}`,`${x.reported} ${x.expected}`)})).filter(x=>x.similarity>=threshold).sort((a,b)=>b.similarity-a.similarity)[0]||null;}
export function exportFixture(ticket, review, capture={}) {if(review.decision!=='Approved') throw new Error('Reviewer approval is required');return {id:`fixture-${ticket.id.toLowerCase()}`,input:`${ticket.subject} ${ticket.body}`,expected_route:routeTicket(`${ticket.subject} ${ticket.body}`).route,expected_citations:review.draft.abstained?[]:review.draft.citations,expected_abstention:review.draft.abstained,entity_level:capture.entityLevel||null,must_not_merge:capture.mustNotMerge||[]};}
export function runFixture(fixture,docs){const routed=routeTicket(fixture.input),draft=draftReply({subject:'',body:fixture.input},docs);const citationExists=fixture.expected_citations.every(c=>docs.some(d=>`${d.id}#${d.section}`===c));const separation=(fixture.must_not_merge||[]).every(pair=>pair.length===2&&pair[0]!==pair[1]);const checks={route:routed.route===fixture.expected_route,abstention:draft.abstained===fixture.expected_abstention,citations:citationExists,separation};return {pass:Object.values(checks).every(Boolean),checks,actualRoute:routed.route};}
