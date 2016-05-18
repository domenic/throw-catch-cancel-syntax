try {
    throw { __throwCancel: a };
} catch (b) {
    if (!b || !Object.prototype.hasOwnProperty.call(b, '__throwCancel')) {
        throw b;
    } else {
        b = b.__throwCancel;
        c(b);
    }
}
