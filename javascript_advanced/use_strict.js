"use strict";
console.log("Hello, Js");
// 1. prevent not defined varibles.
// abc = 3; // abc is not defined
// 2. check reserved keywords.
// var let = "let";// Unexpected strict mode reserved word
var let1 = "let1";
console.log(let1);
// 3. you can not delete varibles, function and function arguments.
var foo = 3;
// delete foo;
console.log("foo is " + foo);
// 4. make eval safer to you.
// if we don't use "use strict", this below command will be processed correctly.
var ev = "enviroment";
eval("var ev = 'eval'");
// when using "use strict", output is enviroment. Otherwise, output is eval.
console.log(ev);