try {
    a();
} catch (e) {
    if (!e || !Object.prototype.hasOwnProperty.call(e, '__throwCancel')) {
        b(e);
    } else {
        let f = e.__throwCancel;
        c(f);
    }
} finally {
    d();
}
