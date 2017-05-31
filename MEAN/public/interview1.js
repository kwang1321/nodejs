// 1. What is a potential pitfall with using typeof bar === "object" to determine 
// if bar is an object? How can this pitfall be avoided?

var bar = null;
// (1) null is an object.
console.log(typeof bar === "object");

// As long as one is aware of this, the problem can easily be avoided by also checking if bar is null:

console.log((bar !== null) && (typeof bar === "object")); // logs false

// define a function,then test.
var fun1 = function(x) {
    return x + 5;
};
var sum = fun1(8);
console.log(sum); // should be 13.

// (3) we must know function is not an object.
console.log((fun1 !== null) && (typeof fun1 === "object")); // logs false

arr = [];
arr.push("1");
arr.push(2);
arr.push({"key" : 100});
console.log(arr.length);
console.log(arr[2].key);
// (4) well, we know array is also an object.
console.log((arr !== null) && (typeof arr === "object")); // logs false

// (5) Meanwhile, we can use toString to detect object class.
var toString = Object.prototype.toString;
console.log(toString.call(bar)); //[object Null]
console.log(toString.call(fun1)); // [object Function]
console.log(toString.call(arr)); //[object Array]
console.log(toString.call(new Date));    // [object Date]
var str = "test string"
console.log(toString.call(str));  // [object String]
console.log(toString.call(Math));        // [object Math]