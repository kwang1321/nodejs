'use strict';

function goo() {
    var myVar = 2;
    function foo() {
        // 1. looking at foo scope, cannot find myVar.
        // 2. looking for goo scope, found it.
        // 3. if foo can not find myVar in foo. it will look for it in global scope.
        console.log(myVar);
    }
    // here will call the foo defined inside but not outside.
    foo();
}

function foo() {
    console.log(myVar);
}
// myVar is not defined. That because foo will look for the myVar from outer scope.
// but it can not find that.
goo();