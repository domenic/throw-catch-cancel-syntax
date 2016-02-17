"use strict";
const sweet = require("sweet.js");
const fs = require("fs");

const macros = fs.readFileSync(require.resolve(".."), { encoding: "utf-8" });

// Need to apply the macros globally, including to Mocha and all its dependencies
require.extensions[".js"] = (module, filename) => {
  console.log("compiling...", filename);

  const input = fs.readFileSync(filename, { encoding: "utf-8" });
  const output = sweet.compile(macros + input, { readableNames: true }).code;

  module._compile(output, filename);
};

const Mocha = require("mocha");

const mocha = new Mocha();
mocha.addFile(require.resolve("./usage-tests.js"));

mocha.run(failures => {
  if (failures > 0) {
    console.error(`Test suite failed with ${failures} failures.`);
    process.exit(1);
  }
});
