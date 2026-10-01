# Kernel Support-to-Eval Desk

Answers from your docs, flags cases that need a person, turns reviewed issues into regression tests, including where it refuses to guess.

Live demo (no sign-in): https://cashpointsoulja.github.io/kernel-support-eval-desk/

## The problem

Support conversations reveal unclear guidance and recurring data errors, but the result often stays in one ticket. The next person must investigate the same issue again. Product teams also lose a useful record of where rules, documentation, or data behavior failed.

This concept connects the support response to a repeatable quality check. It keeps the route, source text, review choice, and later check visible rather than presenting an unexplained answer.

## Who it is for

This is for the support and product team at a company that sells business identity data. Support can prepare a sourced response and hand uncertain cases to a person. Product and data-quality reviewers can turn an approved correction into a fixture that checks the same behavior later.

## How the loop works

1. **Intake:** Choose one of ten synthetic tickets or edit its subject and message.
2. **Route:** Keyword rules assign the ticket to documentation, API troubleshooting, data quality, or a person. The matched words and confidence label are shown.
3. **Cited draft:** Token overlap finds up to three source passages above a fixed score. The draft quotes those passages and lists their identifiers. If none qualify, the desk asks for context instead.
4. **Review:** A person can edit the reply, add a note, and approve, reject, edit, or escalate it. Data-quality cases also capture the expected behavior, entity level, evidence link, and an optional pair that must stay separate.
5. **Regression fixture:** Only an approved item can be downloaded as a JSON fixture. It records the current expected route, citations, refusal behavior, and separation rule.
6. **Eval run:** The fixture runner checks the route, refusal result, citation identifiers, and valid separation pairs. Two seeded fixtures fail on purpose to show the checks working.
7. **Audit log:** Routing, retrieval, drafting or refusal, review, and export events are timestamped in the browser.

## Run it

Requires a current Node.js release with npm.

```sh
npm test
npm run build
```

Serve `dist` with any static file server. For example:

```sh
python3 -m http.server 8000 --directory dist
```

Then open `http://localhost:8000`.

## Deploy to Cloudflare Pages

1. Push the repository to a Git provider supported by Cloudflare Pages.
2. In Cloudflare, create a Pages project and connect the repository.
3. Set the production branch to `main`.
4. Set the command to `npm run build`.
5. Set the output directory to `dist`.
6. Leave environment variables empty and deploy.

The site needs no server, credentials, or external service.

## Documentation map

Start with [`docs/README.md`](docs/README.md) for the reading order. The folder covers the plain-English concept, product requirements, root cause, user needs, decisions, success measures, test approach and results, viability, and possible next work.

## Honest limitations

- Routing uses ordered keyword rules. Retrieval uses token overlap and a fixed threshold. Neither understands meaning, and small wording changes can change the result.
- Drafts join matching source sentences. They are not checked against sources beyond the small included corpus.
- A citation check confirms that an identifier exists, not that the cited text proves the expected answer.
- The separation check validates only that a pair contains two different values. It does not inspect an identity system.
- Review state and the audit log live in one browser's local storage. They are not shared, durable, authenticated, or protected from editing.
- Fixture downloads are local files. The app does not import them or save them to a shared suite.
- All tickets, documentation, identifiers, links, and fixtures are synthetic.
- The concept has no access to any real support, customer, company, or identity system.

Independent concept by Ayo Ahmed. Synthetic data only. Not affiliated with Kernel.
