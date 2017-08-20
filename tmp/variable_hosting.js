'use strict';
// var a;
//1.  no errors. variable hoisting.
console.log('a is ' + a);
var a = 3;
a = 5;
// a = {3:5};

//2. hoisting function is also ok.
foo();

function foo() {
    // automatically hoisting the defination of b on the top of the scope.
    // declaration.
    console.log("b is " + b);
    var b = 3;
}

// 3.  foo2 is not a function. this is because it's just a hoisting of var foo2; to the top.
// at the calling time, foo2 is undefined.
// foo2();
var foo2 = function() {
    console.log('this is foo2');
};