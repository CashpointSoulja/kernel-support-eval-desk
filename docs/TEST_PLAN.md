# Test plan

## Automated checks

| Area | Check |
|---|---|
| Routing | A ticket returns a route and exposes the matched rule words |
| Retrieval | A relevant query returns source identifiers and a positive score |
| Refusal | A query below the evidence threshold returns a context request |
| Duplicate hint | Similar reported and expected text returns the closest case above the threshold |
| Export gate | Rejected work cannot be exported; approved work can |
| Fixture runner | Route, refusal, citation existence, and separation results contribute to the final pass or fail result |

Run with `npm test`.

## Manual workflow checks

1. Select each seeded ticket and confirm its subject and message populate the intake form.
2. Edit the text, route it, and confirm the displayed match details and retrieved passages reflect the edited text.
3. Add a result to the review queue and exercise approve, edit, reject, and escalate.
4. For a data-quality case, fill in each capture field and verify a possible duplicate is only suggested.
5. Confirm an approved item exposes a fixture download and that its JSON matches the visible review state.
6. Run all fixtures and confirm the two deliberately stale fixtures fail for the stated reasons.
7. Refresh and confirm queue and audit entries remain in the same browser.
8. Reset and confirm local queue, report, export, and audit state is cleared.

## Usability and access checks

- Use the intake, tabs, review controls, and reset control with a keyboard only.
- Check visible focus, label association, reading order, and status text.
- Check narrow phone and wide desktop layouts without clipped controls or hidden content.
- Confirm the interface says that nothing is sent and that all data is synthetic.

## Known boundaries

The automated suite does not exercise browser storage, downloads, rendering, keyboard behavior, responsive layout, or the accuracy of the source content. Those require the manual checks above.
