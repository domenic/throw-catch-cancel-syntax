try {
    a();
} catch (e) {
    const throwCancelReason = e.__throwCancel;
    if (throwCancelReason === undefined) {
        b(e);
    } else {
        throw e;
    }
}
