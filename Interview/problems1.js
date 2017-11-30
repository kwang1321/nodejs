// 1. Write a sum method which will work properly when invoked using either syntax below.
// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

function sum() {
    // body...
    var len = arguments.length;
    var i = arguments[0];
    if (len === 1) {
        return function(j) {
            // console.log(this);
            return j + i;
        };
    } else {
        return arguments[0] + arguments[1];
    }
}

console.log(sum(2,3));
console.log(sum(2)(3));

function sum2(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(z) { return x + z; };
  }
}

console.log(sum2(2,3));
console.log(sum2(2)(3));

// Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.
function isPalindrome(str) {
    // regular expression to replace space
    str = str.replace(/\W/g, '').toLowerCase();
    console.log(str);
    var arr = str.split('');
    arr.reverse();
    return str === arr.join('');
}

console.log(isPalindrome("aba"));
console.log(isPalindrome("abc"));
console.log(isPalindrome(""));
console.log(isPalindrome("A car, a man, a maraca"));


//3. Discuss possible ways to write a function isInteger(x) that determines if x is an integer.
function isInteger(x) {
    return ((x ^ 0) === x);
}
// true
console.log(isInteger(3));
console.log(isInteger(3.5));
console.log(isInteger(null));
console.log(isInteger(undefined));
console.log(isInteger({a:3}));