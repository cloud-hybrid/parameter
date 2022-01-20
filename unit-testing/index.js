#!/usr/bin/env node

import Path from "path";
import Process from "process";
import Subprocess from "child_process";

const CWD = Process.cwd();

Process.chdir(Path.dirname(Path.join(import.meta.url.replace("file://", ""), "..")));

Process.stdout.write("\n");

Subprocess.execSync(["npm", "install", "--global", "--no-audit", "--no-fund", "--silent", "@types/jest"].join(" "), { stdio: "inherit" });
Subprocess.execSync(["npm", "install", "--global", "--no-audit", "--no-fund", "--silent", "jest@latest"].join(" "), { stdio: "inherit" });
Subprocess.execSync(["npm", "install", "--global", "--no-audit", "--no-fund", "--silent", "ts-node@latest"].join(" "), { stdio: "inherit" });
Subprocess.execSync(["npm", "install", "--global", "--no-audit", "--no-fund", "--silent", "ts-jest@latest"].join(" "), { stdio: "inherit" });
Subprocess.execSync(["npm", "install", "--global", "--no-audit", "--no-fund", "--silent", "node-notifier@latest"].join(" "), { stdio: "inherit" });

Subprocess.execSync(["npm", "install", "--global", "--no-audit", "--no-fund", "--silent", "."].join(" "), { stdio: "inherit" });
Subprocess.execSync(["node", "--experimental-vm-modules", "node_modules/.bin/jest"].join(" "), { stdio: "inherit" });

Process.chdir(CWD);

Process.exit(0);
