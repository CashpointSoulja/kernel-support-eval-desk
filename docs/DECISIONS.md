# Decisions

## 1. Static app, not a backend

**Context:** The concept needs to demonstrate the full support-to-fixture loop without connecting to company systems.

**Decision:** Run the workflow in the browser. Keep review and audit state in local storage and download fixtures as files.

**Trade-off:** It is easy to inspect and host, but there is no shared queue, durable server record, access control, or system integration.

## 2. Deterministic retrieval, not generated answers

**Context:** Reviewers need to see why a passage was selected and reproduce the same result.

**Decision:** Use token overlap against the included corpus. Drafts join the matched source sentences.

**Trade-off:** Results are repeatable and inspectable, but wording changes can miss relevant passages or surface weak ones.

## 3. Fixed abstention threshold

**Context:** The desk should not prepare a factual reply when the included guidance is too weak.

**Decision:** Keep only passages with a score of at least `0.16`. If none qualify, request more context and hand the case to a person.

**Trade-off:** The rule is clear and testable, but the threshold is a concept choice and has not been calibrated on real tickets.

## 4. Human-approved fixtures only

**Context:** A support draft or captured expectation can be incomplete or wrong.

**Decision:** Permit fixture export only after a reviewer marks the queue item approved.

**Trade-off:** Approval provides a clear control point, but it adds work and does not by itself prove that the review was correct.

## 5. Synthetic data only

**Context:** The concept does not need customer records or access to a real support or identity system.

**Decision:** Use invented tickets, identifiers, links, source passages, and fixtures throughout.

**Trade-off:** The workflow can be shared safely, but its accuracy and usefulness on real work remain unproven.
