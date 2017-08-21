'use strict';
// not a number is a number.
console.log(typeof(NaN));
console.log(NaN == 1);
console.log(NaN == false);
// NaN compares anything is false.
console.log(NaN == NaN);
// 1. how to check NaN. we use isNaN.
console.log(isNaN(NaN)); // true.
// false. 1 is a number.
console.log(isNaN(1));
// false. "1" is not a number? no, "1" can be converted into a number.
console.log(isNaN("1"));
// true. fucccccck! can you remember this.?
console.log(isNaN("A"));
// after that, we can get a conclusition that isNaN function is really a shit.

// 2. the very very specific feature of NaN.
var a = NaN;
console.log(a === a);
console.log(a !== a);