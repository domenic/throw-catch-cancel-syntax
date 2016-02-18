"use strict";
require("../ignore-unhandled-cancels.js");
require("./helpers/mocha-ignore-cancels.js");

const assert = require("assert");

describe("throw cancel", () => {
  it("is caught by immediate catch cancel", () => {
    const reason = { some: "reason" };

    try {
      throw cancel reason;
    } catch cancel (r) {
      assert.strictEqual(r, reason, "should reach the catch cancel block with the given reason");
    }
  });

  it("is ignored by catch", () => {
    const reason = { some: "reason" };

    try {
      throw cancel reason;
    } catch (e) {
      assert(false, "should not reach the catch block");
    }
  });

  it("is caught by a catch cancel, bypassing intermediate catches", () => {
    const reason = { some: "reason" };

    try {
      try {
        try {
          throw cancel reason;
        } catch (e) {
          assert(false, "should not reach the innermost catch block");
        }
      } catch (e) {
        assert(false, "should not reach the outer catch block");
      }
    } catch cancel (r) {
      assert.strictEqual(r, reason, "should reach the catch cancel block with the given reason");
    }
  });
});
