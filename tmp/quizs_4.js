'use strict';
// 1. What will this code print?

(function() {

    var a = 3;

})();
// Since "a" is declared inside a function, it isn't visible outside the function therefore it's undefined.
console.log("a defined? " + (typeof a !== 'undefined'));

// 2. https://gist.github.com/jawache/3cddd2b0a27f8ea6a460
// Consider the code snippet below. What will the console output?
function loo() {
    var goo2 = 1;
    moo();
}

function moo() {
    // goo2 is not defined. Because in the scope moo, we can not find any declaration of goo2.
    console.log(goo2);
}

loo();