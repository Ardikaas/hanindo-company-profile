# Browser verification

Build the frontend with `npm.cmd run build`, then run
`node scripts/check-responsive.cjs` from the client directory.

This delegates to the CMS end-to-end suite in `server/tests/cms.cjs --browser`.
Unlike the original static-layout checks, it logs in through the real API and uses
an isolated MongoDB database, so it exercises protected admin pages and actual
content mutations. MongoDB must be running locally (or set TEST_MONGO_URI).

The suite requires Playwright installed in `D:/Hanindo/.responsive-tools` and
Microsoft Edge. It creates and cleans its own test data; application data is
not modified. Screenshots are saved in the ignored `responsive-artifacts/cms`
directory. External requests are blocked; fonts use the local fallback.

Checks cover login/logout, upload and PDF conversion, CRUD for every content type,
Home publishing, mail read/unread, and responsive layouts from 280 to 7680 CSS
pixels. These are Chromium checks, not physical-device or Safari certification.
