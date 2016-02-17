"use strict";
const sweet = require("sweet.js");
const fs = require("fs");

const macros = fs.readFileSync(require.resolve(".."), { encoding: "utf-8" });

module.exports = input => sweet.compile(macros + input, { readableNames: true }).code;
