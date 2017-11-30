// 1. if a varible is occuered in the inner scope, javascript will not check the outer scope.
'use strict'
var x = 21;
var girl = function() {
    // that is the same as var x here.
    // why doesn't it show the global x 21? The reason is it checks that there is local x present.
    console.log(x);
    var x = 20;
    console.log(x);
};
girl();

// 2. varible is hoisted. inner varible and outer varible.
(function() {
    try {
        throw new Error();
    } catch (x) {
        // x, y will be hoisted.
        var x = 1,
            y = 2;
        // display the inner x, but not the outer x.
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();

// 3. test object keys.
var d = {};
['zebra', 'horse'].forEach(function(k) {
    d[k] = undefined;
});

console.log(d);

// 4. test IIFE
(function() {
    // body...
    var arg1 = "defined one varible in this scope";

    function fun1() {
        console.log("this is fun1");
    }
    // fun2 just belongs to this scope.
    var fun2 = fun1;
    console.log(arg1);
})();

(function() {
    // body...
    // console.log(arg1);
    // console.log(bbb);
    // here, fun2 is not defined. 
    try {
        // no exception throws. undefined.
        console.log(typeof fun2);
        // throw exception. fun2 is not defined.
        console.log(fun2);
    } catch (e) {
        console.log(e);
    }
})();