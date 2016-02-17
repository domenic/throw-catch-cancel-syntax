# SweetJS Macros for `throw cancel` and `catch cancel`

These [SweetJS](http://sweetjs.org/) macros implement the language extensions from ["Canceled as a third state"](https://github.com/domenic/cancelable-promise/blob/master/Third%20State.md), in particular `throw cancel` and `catch cancel`. They are fairly rough and exists only in service of some experiments I'm doing, so be careful.

The biggest problem with the current strategy is that the cancelation reasons propagate to the top level like errors, causing Node.js crashes and such. They should instead be silently ignored at top level. (This is one of the distinguishing features between cancelation and exceptions.) I guess this could be fixed by adding an interceptor to `process.on("unhandledException", ...)`.
