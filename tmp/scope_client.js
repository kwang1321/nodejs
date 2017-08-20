'use strict';
// 1. asim will be a property of window automatically.
var asim = 1;
window.foo = 2;
console.log(window.asim); // 1

function moo() {
    var obj = 3;
    console.log(obj);
}
moo();
// obj is not defined
// console.log(obj);
// 3. It is must be concerned that javascript varibles are only in function scope or global scope.
// for, while is not a scope.
for (var i = 0; i < 5; i++) {
    var j = 5;
}
// it is not like function. no errors, but print 5.
console.log(j);