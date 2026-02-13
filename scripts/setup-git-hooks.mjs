import { existsSync, chmodSync } from "node:fs";
import { execSync } from "node:child_process";
import { join } from "node:path";

// This sets up local git hooks for contributors.
// It is a friendly guardrail; GitHub branch protection still remains the source of truth.

const isCI = Boolean(process.env.CI);
if (isCI) process.exit(0);

const gitDir = join(process.cwd(), ".git");
if (!existsSync(gitDir)) process.exit(0);

const hooksPath = join(process.cwd(), ".githooks");
const prePush = join(hooksPath, "pre-push");

if (!existsSync(hooksPath) || !existsSync(prePush)) {
  // Nothing to install.
  process.exit(0);
}

try {
  // Ensure hook is executable.
  chmodSync(prePush, 0o755);

  // Configure git to use repo-local hooks directory.
  execSync("git config core.hooksPath .githooks", { stdio: "ignore" });
} catch {
  // Fail silently: hooks are optional quality-of-life.
  process.exit(0);
}
