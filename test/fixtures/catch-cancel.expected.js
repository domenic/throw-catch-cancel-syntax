try {
  a();
} catch (e) {
  const _throwCancelReason = e.__throwCancel;
  if (_throwCancelReason !== undefined) {
    b(_throwCancelReason);
  }

  throw e;
}

try {
  a();
} catch (e) {
  const _throwCancelReason = e.__throwCancel;
  if (_throwCancelReason !== undefined) {
    b(_throwCancelReason) + c(_throwCancelReason) * _throwCancelReason;
  }

  throw e;
}

try {
  a();
} catch (e) {
  const _throwCancelReason = e.__throwCancel;
  if (_throwCancelReason !== undefined) {
    b(_throwCancelReason);
  }

  throw e;
}
