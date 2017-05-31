(function() {
    var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

// var a = b = 3 is a shorthand for b = 3; var a = b;
// b ends up being a global variable.
// so the answer is:
//           a defined? false
//           b defined? true
