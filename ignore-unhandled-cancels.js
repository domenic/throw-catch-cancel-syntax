"use strict";

process.on("uncaughtException", err => {
  if ("__throwCancel" in err) {
    return;
  }

  // TODO check how closely equivalent this behavior is.
  // Seems like it would not really work well in the presence of other uncaughtException handlers.
  throw err;
});
