# A Babel Plugin for `throw cancel` and `catch cancel`

This Babel plugin implements the language extensions from ["Canceled as a third state"](https://github.com/domenic/cancelable-promise/blob/master/Third%20State.md), in particular the `throw cancel` and `catch cancel` language extensions. It's very rough and exists only in service of some experiments I'm doing, so be careful.

The biggest problem with the current strategy is that the cancelation reasons propagate to the top level like errors, causing Node.js crashes and such. They should instead be silently ignored at top level. (This is one of the distinguishing features between cancelation and exceptions.)

**Status**: not even started yet. It seems like writing Babel plugins for new syntax is not very well documented. Help appreciated.
