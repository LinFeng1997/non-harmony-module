//index.js
'use strict';

function foo() {
    import("file-saver").then(module => {
        console.log(module)
    })
}

console.log(foo());