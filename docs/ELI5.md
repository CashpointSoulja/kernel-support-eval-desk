# The simple version

## What the company does

The company sells information about businesses. It helps customers tell one company from another. It can show whether a name is a brand, a local branch, a legal company, or a parent company. It can also show which records belong together. This information must be careful because two related businesses are not always the same business.

## What can go wrong

A customer may spot a bad link or a mixed-up record. They report it to support. Support must work out what happened, find the right guidance, and explain the next step. If the report is unclear, support needs more facts. If the lesson stays in that one conversation, another person may have to solve the same problem again.

## What this tool does

1. It reads the ticket and looks for simple clue words.
2. It chooses a path, such as a data issue or a question the written guidance may answer.
3. It looks for matching passages in the included guidance.
4. It prepares a reply with those passages, or asks for more details when the match is too weak.
5. A person reviews the work. An approved case can become a check for later changes.

## Worked example

The ticket says: **“this brand got mapped to its holding company.”**

The words “brand,” “mapped,” and “holding” point to a data-quality issue. The tool finds a passage that says a holding company should not replace a brand when the customer asked for the brand level. It shows that passage with the draft reply.

A reviewer checks the reply. They can record what happened, what should have happened, the business level, and a source link. They can also name two records that must stay separate. Nothing is sent to the customer. Nothing becomes a reusable check until the reviewer approves it.

## Why it refuses to guess

A confident-sounding wrong answer can make a data problem worse. If no passage is a strong enough match, the tool asks for the affected identifier, what the customer expected, what they saw, and a source link. A person can then investigate. Saying “I need more detail” is safer than making up an answer.

## What is a regression test?

Think of a note beside a repaired door: “After any repair, check that this door still locks.” A regression test is that reminder turned into a repeatable check. It keeps the example and the expected result. Later, when rules change, the team runs the check again. If the old problem comes back, the check fails and points to what changed.
