'use strict';
/*
What a the different types in Javascript?
five primitive types:
1. String // "ab", 'a'
2. Number // 2, 2.0
3. Boolean // true, false
4. Null // null
5. Undefined. // undefined.

Object.
*/

var a;
// undefined. unintialized varibles.
console.log(a);

// javascript engine does not set a variable to null. Only the programmer can set it to null.
var b = null;
console.log(b);
// we can say, null and undefined are all values. just the same as one is a value and 2 is a value.
console.log(null == undefined)

console.log(Object.prototype.toString.call(undefined));
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(NaN));
console.log(Object.prototype.toString.call(3));
console.log(Object.prototype.toString.call('a'));
console.log(Object.prototype.toString.call(false));
console.log(Object.prototype.toString.call("false"));
console.log(Object.prototype.toString.call({}));
console.log(Object.prototype.toString.call(function(){}));