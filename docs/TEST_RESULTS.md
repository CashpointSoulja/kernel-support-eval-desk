# Test results

Run date: 2026-10-01

## Automated result

Command: `npm test`

```text
npm warn Unknown env config "http-proxy". This will stop working in the next major version of npm.

> test
> node --test

✔ router exposes rule matches (3.048761ms)
✔ retrieval applies threshold and abstains without evidence (4.89862ms)
✔ retrieval returns source identifiers and scores (1.342322ms)
✔ dedupe detects token overlap (0.479704ms)
✔ fixture export requires approval (0.719272ms)
✔ runner validates route, abstention, citations, and separation (0.769609ms)
ℹ tests 6
ℹ suites 0
ℹ pass 6
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 320.917224
```

All six implementation checks passed. The environment also reported an `http-proxy` configuration warning. It did not affect the result.

## Packaging result

Command: `npm run build`

```text
npm warn Unknown env config "http-proxy". This will stop working in the next major version of npm.

> build
> node scripts/build.js

Static site copied to dist/
```

The command completed successfully.

## Seeded browser suite

The browser suite contains 12 seeded fixtures. Ten describe current expectations. Two are deliberately incorrect:

- `known-regression-route` expects the wrong route.
- `known-regression-separation` repeats one identifier in a must-not-merge pair.

Those two failures demonstrate the visible route and separation checks. They are separate from the six passing implementation checks above. The browser suite was not manually run as part of this command record.
