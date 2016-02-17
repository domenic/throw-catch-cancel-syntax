try {
    a();
} catch (e) {
    const throwCancelReason = e.__throwCancel;
    if (throwCancelReason === undefined) {
        throw e;
    } else {
        e = throwCancelReason;
        b(e);
    }
}
try {
    a();
} catch (e2) {
    const throwCancelReason$2 = e2.__throwCancel;
    if (throwCancelReason$2 === undefined) {
        throw e2;
    } else {
        e2 = throwCancelReason$2;
        b(e2) + c(e2) * e2;
    }
}
try {
    a();
} catch (e3) {
    const throwCancelReason$3 = e3.__throwCancel;
    if (throwCancelReason$3 === undefined) {
        throw e3;
    } else {
        e3 = throwCancelReason$3;
        b(e3);
    }
}
