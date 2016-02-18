"use strict";

const originalIt = global.it;
global.it = function (label, callback) {
  originalIt.call(this, label, function () {
    try {
      return callback.apply(this, arguments);
    } catch (e) {
      if (e.__throwCancel) {
        return;
      }
      throw e;
    }
  });
};
