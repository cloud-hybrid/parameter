import OS from "os";
import Path from "path";
import Process from "process";
import Subprocess from "child_process";

const User = OS.userInfo({ encoding: "utf-8" });

const Jest = Path.join(User.homedir, ".npm", "_npx", "node_modules", "jest", "bin", "jest.js");

Subprocess.execSync(["node", "--experimental-vm-modules", Jest, "--watch"].join(" "), { stdio: "inherit" });

process.exit(0);
