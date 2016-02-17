try {
    a();
} catch ($value) {
    const throwCancelReason = $value.__throwCancel;
    if (throwCancelReason === undefined) {
        b(e);
    } else {
        let f = throwCancelReason;
        c(f);
    }
}
