try {
    a();
} catch (e) {
    const throwCancelReason = e.__throwCancel;
    if (throwCancelReason === undefined) {
        b(e);
    } else {
        let f = throwCancelReason;
        c(f);
    }
}
