try {
    a();
} catch (f) {
    if (!f || !Object.prototype.hasOwnProperty.call(f, '__throwCancel')) {
        c(f);
    } else {
        let e = f.__throwCancel;
        b(e);
    }
}
