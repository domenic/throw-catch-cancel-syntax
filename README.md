# SweetJS Macros for `throw cancel` and `catch cancel`

These [SweetJS](http://sweetjs.org/) macros implement the language extensions from ["Canceled as a third state"](https://github.com/domenic/cancelable-promise/blob/master/Third%20State.md), in particular `throw cancel` and `catch cancel`. They are fairly rough and exists only in service of some experiments I'm doing, so be careful.

## Usage

```
npm install -g sweet.js
npm install throw-catch-cancel-syntax
sjs -m throw-catch-cancel-syntax your-file.js
```

Also, somewhere in the top level of your program, you need to do

```js
require("throw-catch-cancel-syntax/ignore-unhandled-cancels");
```

to avoid program crashes when cancelations bubble to the top of the stack. (This is an important part of the semantics of cancelations; see the linked document.)
