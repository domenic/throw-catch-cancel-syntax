try {
    a();
} catch (e) {
    if (!e || !Object.prototype.hasOwnProperty.call(e, '__throwCancel')) {
        throw e;
    } else {
        e = e.__throwCancel;
        b(e);
    }
}
try {
    a();
} catch (e2) {
    if (!e2 || !Object.prototype.hasOwnProperty.call(e2, '__throwCancel')) {
        throw e2;
    } else {
        e2 = e2.__throwCancel;
        b(e2) + c(e2) * e2;
    }
}
try {
    a();
} catch (e3) {
    if (!e3 || !Object.prototype.hasOwnProperty.call(e3, '__throwCancel')) {
        throw e3;
    } else {
        e3 = e3.__throwCancel;
        b(e3);
    }
}
