'use strict';
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