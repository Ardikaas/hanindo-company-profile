// Run the integrated browser suite against the production client build.
const { execFileSync } = require("node:child_process");
const path = require("node:path");
try {
  execFileSync(
    process.execPath,
    [path.resolve(__dirname, "../../server/tests/cms.cjs"), "--browser"],
    {
      cwd: path.resolve(__dirname, "../../server"),
      stdio: "inherit",
    },
  );
} catch (error) {
  process.exitCode = error.status || 1;
}
