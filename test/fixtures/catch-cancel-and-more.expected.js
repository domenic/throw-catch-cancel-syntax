try {
  a();
} catch (e) {
  const _throwCancelReason = e.__throwCancel;
  if (_throwCancelReason !== undefined) {
    b(e);
  }

  c(e);
}

try {
  a();
} catch (e) {
  const _throwCancelReason = e.__throwCancel;
  if (_throwCancelReason !== undefined) {
    c(e);
  }

  b(e);
}

try {
  a();
} catch (e) {
  const _throwCancelReason = e.__throwCancel;
  if (_throwCancelReason !== undefined) {
    c(e);
  }

  b(e);
} finally {
  d(e);
}
