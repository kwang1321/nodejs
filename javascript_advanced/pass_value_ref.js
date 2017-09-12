'use strict';
var a = 1;
function foo(a) {
    // body...
    a = 3;
}
console.log(a);

var b = true;
function change(b) {
    // body...
    b = false;
}
change(b);
// still true, because the parameter in change is a copy of b.
// it is passed by value.
console.log(b);

function change_obj(obj) {
    // body...
    obj.change = true;
    obj.add = "add";
    // we can not change what obj point to.
    obj = {"abc" : "abc"};
}
var obj = {"change" : false, "name":"object"};
change_obj(obj);
console.log(obj);