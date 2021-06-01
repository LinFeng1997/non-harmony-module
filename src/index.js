//index.js
"use strict";

function foo() {
    import("file-saver").then(module => {
        console.log("module:", module)
    })
}

console.log(foo());