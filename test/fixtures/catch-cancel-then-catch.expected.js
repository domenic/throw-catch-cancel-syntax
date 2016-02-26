try {
    a();
} catch (f) {
    const throwCancelReason = f.__throwCancel;
    if (throwCancelReason === undefined) {
        c(f);
    } else {
        let e = throwCancelReason;
        b(e);
    }
}
