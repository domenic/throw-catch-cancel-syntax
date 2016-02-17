try {
  a();
} catch cancel (e) {
  b(e);
}

try {
  a();
} catch cancel(e) {
  b(e) + c(e) * e;
}

try {
  a();
}
catch
cancel(e)
{
  b(e);
}
