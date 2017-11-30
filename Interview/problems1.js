'use strict'
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

console.log(sum(2, 3));
console.log(sum(2)(3));

function sum2(x, y) {
    if (y !== undefined) {
        return x + y;
    } else {
        return function(z) { return x + z; };
    }
}

console.log(sum2(2, 3));
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
console.log(isInteger({ a: 3 }));

// 4. How can we calculate the length of the above associative array's 
var counterArray = {
    A: 3,
    B: 4
};
counterArray["C"] = 1;
console.log(counterArray.length); // undefined.
console.log(Object.keys(counterArray).length); // 3;
console.log(Object.keys(counterArray));
console.log(toString.call(Object.keys(counterArray)));

function getObjectLength(obj) {
    // body...
    var cnt = 0;
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            cnt++;
        }
    }
    return cnt;
}

console.log(getObjectLength(counterArray)) // 3

Object.length2 = function(obj) {
    // body...
    // body...
    var cnt = 0;
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            cnt++;
        }
    }
    return cnt;
}
console.log(Object.length2(counterArray));

// 5. What is the instanceof operator in JavaScript? What would be the output of the code below?
(function() {
    function foo() {
        return foo;
    }
    console.log(new foo() instanceof foo);
    var bar = new foo();
    console.log(bar === foo);
    console.log(bar instanceof foo);

    function Animal() {
        this.type = "animal";
    }

    var dog = new Animal();
    // true, dog.__proto__ = Animal.prototype.
    console.log(dog instanceof Animal);
    // here, dog has the property 'type'.
    // but Animal does not has this one.
    console.log(toString.call(Animal) === '[object Function]');
    console.log(dog.type);
})();
// 6. What will be the output of code below?

var salary = "1000$";

(function() {
    console.log("Original salary was " + salary);
    // salary varible is hoisted to the scope.
    var salary = "5000$";

    console.log("My New Salary " + salary);
})();

// 7. What is function hoisting in JavaScript?
// Basically, the JavaScript interpreter looks ahead to find all variable declarations 
// and then hoists them to the top of the scope where they're declared. For example:
(function() {
    //     foo(); // Here foo is still undefined 
    var foo = function foo() {
        return 12;
    };
    console.log(foo());
})();

// Question 17
// 8. What is the difference between the function declarations below?
(function() {
//     foo(); // Calling foo function here will give an Error
    var foo = function() {
        console.log("Hi I am inside Foo");
    };
    bar(); // Calling foo function will not give an Error
    function bar() {
        console.log("Hi I am inside Bar");
    };
    //1. The main difference is the function foo is defined at run-time whereas function bar is defined at parse time. 

    //2. Another advantage of this first-one way of declaration is that you can declare functions based on certain conditions. 
//     if (...) {
//         var foo = function..
//     } else {
//         var foo = ...
//     }
})();

(function() {
    // tt is hoisted to the top.
    if(false) {
        tt = 3;
    } else {
        var tt = 4;
    }
    console.log(tt);
})();

// 9. What will be the output of the code below?
// NFE (Named Function Expression 
(function() {
    console.log(foo);
    console.log(bar);
    var foo = function bar2(){ return 12; };
    // bar2 can not be visible
//     console.log(typeof bar2());
    console.log(typeof foo());

    // A function definition can have only one reference variable as its function name. 
    // In sample 1, bar's reference variable points to anonymous function. 
    // In sample 2, the function's definition is the name function.

    var foo = function bar(){ 
        // foo is visible here 
        // bar is visible here
        console.log(typeof bar()); // Work here :)
        return 3;
     };
    // foo is visible here
    // bar is undefined here
})();

(function(){
    var bar = true;
    // 1
    console.log(bar + 0);   
    // turexyz
    console.log(bar + "xyz");  
    // 2
    console.log(bar + true);  
    // 1
    console.log(bar + false);
//     remember
//     Number + Number -> Addition
// Boolean + Number -> Addition
// Boolean + Number -> Addition
// Number + String -> Concatenation
// String + Boolean -> Concatenation
// String + String -> Concatenation   
})();

(function(){})(); 

(function(){
    var trees = ["xyz","xxxx","test","ryan","apple"];
    delete trees[3];
    // ["xyz", "xxxx", "test", undefined, "apple"]
    console.log(trees.length); // still 5.
    console.log(trees);
    // if we want to delete the element, change the length, you should use splice.
    // array.splice(start, deleteCount, item1, item2, ...)
    trees.splice(3, 1);
    console.log(trees);
})(); 

// 10. implement mul(2)(3)(4) = 24
(function(){
    var mul = function(x) {
        return function(y) {
            return function(z) {
                return x * y * z;
            };
        };
       
    };
    console.log(mul(2)(3)(4));
    console.log(mul(4)(3)(4));
})(); 