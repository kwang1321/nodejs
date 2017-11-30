'use strict';
function sayHello(name) {
    var text = "Hello " + name;
    return function() {
        // it can refer the reference of outside variables which is in the
        // closure scope. this is the basic understanding of closure.
        console.log(text);
    };
}

// a closure is a function, along with all variables or functions that were in-scope at the time that the closure was created. 
// In JavaScript, a closure is implemented as an “inner function”; 
// i.e., a function defined within the body of another function. 
// An important feature of closures is that an inner function still has access to the outer function’s variables.

var sayAsim = sayHello("asim");
// Hello asim
sayAsim();

// 2. advanced technology.
var foo = [];
for (var i=0; i<10; i++) {
    // closure is not a copy of i, it is just the actual value of I.
    foo[i] = function() {
        return i;
    };
}
console.log(foo[0]());
console.log(foo[1]());
console.log(foo[2]());

// 3. to solve above problem, we should do as below:
var foo2 = [];
for (var i=0; i<10; i++) {
    // the closures only point to the current value of that outer scope variables
    // but not the variable when the closure was created.
    // when it is created.
    (function() {
        var j = i;
        foo2[i] = function() {return j};
    })();
}

console.log(foo2[0]());
console.log(foo2[1]());
console.log(foo2[2]());

// 4. to solve above problem, we should do as below:
var foo3 = [];
for (var i=0; i<10; i++) {
    // every time foo3 will be added one function because of IIFE(Immediatelly invoked functioning expression).
    (function(y) {
        foo3[y] = function() {return y};
    })(i);
}

console.log(foo3[0]());
console.log(foo3[1]());
console.log(foo3[2]());

// A closure is an inner function that has access to the variables in the outer (enclosing) function’s scope chain. 
// The closure has access to variables in three scopes; 
// specifically: (1) variable in its own scope, (2) variables in the enclosing function’s scope, and (3) global variables.
var gloVar = "Hello,";
var closTest = (function(arg1) {
    var clos = function(arg2) {
        console.log(gloVar + arg1 +  ","+ arg2);
    };
    return clos;
})("Jack");

closTest("Gary");