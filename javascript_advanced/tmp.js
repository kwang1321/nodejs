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