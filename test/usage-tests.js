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

  it("works even with undefined", () => {
    try {
      throw cancel undefined;
    } catch cancel (r) {
      assert.strictEqual(r, undefined, "should reach the catch cancel block with undefined as the reason");
    }
  });

  it("works even with null", () => {
    try {
      throw cancel null;
    } catch cancel (r) {
      assert.strictEqual(r, null, "should reach the catch cancel block with null as the reason");
    }
  });
});

describe("throw", () => {
  it("still works with normal Errors", () => {
    const e = new Error("boo");

    try {
      throw e;
    } catch (thrown) {
      assert.strictEqual(thrown, e, "should reach the catch block with the thrown error");
    }
  });

  it("still works even with undefined", () => {
    try {
      throw undefined;
    } catch (e) {
      assert.strictEqual(e, undefined, "should reach the catch block with undefined as the exception");
    }
  });

  it("still works even with null", () => {
    try {
      throw null;
    } catch (e) {
      assert.strictEqual(e, null, "should reach the catch block with null as the exception");
    }
  });
});
