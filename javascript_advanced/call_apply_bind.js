'use strict';
// 1. basic knowlege about call_applly.
function asim(param1, param2) {
    console.log(this);
    console.log(param1);
    console.log(param2);
}

console.log(asim.name);

console.log(asim.length); // 2
// no-strict mode, In "non-strict" mode, 
// if the value of the first argument is null or undefined, it is replaced with the global object.
// if in the strict mode, this will be 'undefined'.
asim();
var obj = {};
asim.call();
// asim.call(obj, 3, 2);
// asim.apply(obj, [3, 2]);

// 2.fix the bug about_this.
var aism1 = {
    checkThis : function() {
        // first
        console.log(this);
        // 2nd
        console.log(this === aism1);
        var checkThis2 = function() {
            console.log(this);
            this.info = "aism1";
        };
        // if we are using call. this in the fucntion checkThis2 will be aism1.
        checkThis2.call(this);
        console.log(this.info);
    },
    name : "aism1",
    isObject : true
};

aism1.checkThis();
// you must pay attention to the strict mode. the first parameter of call is must be the object.
// you can not use aism1.checkThis.call() to replace that.
aism1.checkThis.call(aism1);

// 3. when you have a variable number of parameters, you should use call.
function sum() {
    var total = 0;
    //console.log(arguments[0]);
    for(var i=0; i<arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

// do not forget the first parameter.
console.log(sum.call(null,1,3,5, 15));
console.log(sum.apply(null,[1,3,5, 15]));
// 4. a simple test of bind.
var aobj = {"name" : "aobj"};
var bobj = {
    func : function() {
        console.log(this);
    }.bind(aobj),
    name : "bobj"
}
// will output aobj because of the binding.
bobj.func();

// 5.solve the problem in about_this.js file.
var aism3 = {

    checkThis : function() {
        // 'use strict';
        console.log(this);
        // 2nd
        console.log(this === aism3);

        var checkThis2 = function() {
            console.log(this);
            this.info = "checkThis2";
        }.bind(this);
        checkThis2();
        console.log(this.info);
    },
    name : "aism3",
    isObject : true
};
aism3.checkThis();