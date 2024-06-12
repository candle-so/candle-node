"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var child_process_1 = require("child_process");
// Read the package.json file
var packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
// Increment the version number
var versionParts = packageJson.version.split(".");
versionParts[2] = parseInt(versionParts[2], 10) + 1;
packageJson.version = versionParts.join(".");
// Write the updated package.json file
fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2), "utf8");
// Run the build command
(0, child_process_1.execSync)("npm run build", { stdio: "inherit" });
// Publish the package
(0, child_process_1.execSync)("npm publish --access public", { stdio: "inherit" });
console.log("Successfully deployed version ".concat(packageJson.version));
