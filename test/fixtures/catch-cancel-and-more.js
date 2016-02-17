try {
  a();
} catch cancel (e) {
  b(e);
} catch (f) {
  c(f);
}

try {
  a();
} catch (e) {
  b(e);
} catch cancel (f) {
  c(f);
}


try {
  a();
} catch (e) {
  b(e);
} catch cancel (f) {
  c(f);
} finally {
  d(e);
}
