# Product requirements

## Problem

Support teams repeatedly explain identity levels, company hierarchy, processing behavior, and data-quality issues. The resolution rarely becomes a durable check, so support and product teams lose evidence about recurring failure patterns.

## Audience

The primary users are support specialists, data-quality reviewers, and product or quality owners at a company that sells business identity data.

## Outcome

Provide one inspectable workspace that routes a ticket, retrieves passages from a small documentation corpus, prepares a cited draft when evidence clears a threshold, requests context when it does not, records a review choice, and exports an approved regression fixture.

## Functional requirements

- Offer ten synthetic tickets and allow the selected subject and message to be edited.
- Route by ordered keyword rules to `needs-human`, `data-quality issue`, `API troubleshooting`, or `docs-answerable`.
- Show matched rules, a confidence label, and a short reason.
- Score corpus passages by token overlap, keep passages above the fixed threshold, and show at most three.
- Cite each retrieved passage with its source and section identifier.
- Request an identifier, expected outcome, observed outcome, and supporting link when no passage qualifies.
- Let a reviewer edit the draft, add a note, and approve, edit, reject, or escalate.
- For data-quality routes, capture reported behavior, expected behavior, entity level, a synthetic evidence link, and an optional must-not-merge pair.
- Show a possible duplicate based on token overlap. Never merge automatically.
- Block fixture export until the queue item is approved.
- Run seeded and locally exported fixtures against route, refusal, citation existence, and separation checks.
- Keep a timestamped local audit history for routing, retrieval, draft or refusal, queue, review, and export events.

## Guardrails

- No reply is sent.
- A person controls every review decision and fixture export.
- Missing evidence produces a context request rather than a factual draft.
- All included information is synthetic.

## Out of scope

Authentication, shared queues, live customer records, external writes, sending replies, real correction workflows, persistent server storage, fixture import, semantic search, and production support decisions.

## Acceptance checks

The automated checks cover routing details, threshold behavior, source identifiers and scores, duplicate hints, approval-gated export, and fixture results. The manual plan covers the browser workflow, local persistence, download contents, responsive layout, and keyboard use.
