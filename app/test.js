const assert = require("assert");
const { message } = require("./app");
assert.ok(message().startsWith("Hello from"));
console.log("tests passed");
