try {
    a();
} catch (e) {
    if (!e || !Object.prototype.hasOwnProperty.call(e, '__throwCancel')) {
        b(e);
    } else {
        throw e;
    }
}
