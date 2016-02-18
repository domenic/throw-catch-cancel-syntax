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

You should run as much code as you can through the macro. Anything that is not macro-ified will have the original `try`/`catch` statements, which catch cancelations as if they were exceptions. So ideally you'd run your test framework and dependencies and such through it. Unfortunately SweetJS has a lot of parsing bugs that make this hard in the general case (e.g. code without semicolons breaks it).
