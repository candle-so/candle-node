import * as fs from "fs";
import { execSync } from "child_process";

// Read the package.json file
const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));

// Increment the version number
const versionParts = packageJson.version.split(".");
versionParts[2] = parseInt(versionParts[2], 10) + 1;
packageJson.version = versionParts.join(".");

// Write the updated package.json file
fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2), "utf8");

// Run the build command
execSync("npm run build", { stdio: "inherit" });

// Publish the package
execSync("npm publish --access public", { stdio: "inherit" });

console.log(`Successfully deployed version ${packageJson.version}`);
