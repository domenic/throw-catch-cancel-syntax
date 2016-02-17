try {
  a();
} catch cancel (e) {
  b(e);
}

try {
  a();
} catch cancel(e2) {
  b(e2) + c(e2) * e2;
}

try {
  a();
}
catch
cancel(e3)
{
  b(e3);
}
