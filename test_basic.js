// function func(a, b) {
//     // body...
//     return a + b;
// }

function doFunc(func, a, b) {
    return func(a, b);
}

console.log(doFunc(function(c, d) {
    return c * d;
}, 3, 5));

/**
when cat is crying. everything has reflaction
*/
function cat_cry(action) {
    console.log("miao...miao...");
    action();
}

// function man()

var Cat = {
    createNew: function() {
        var cat = {};
        cat.crying = function() {
            console.log("miao...miao...");
            var len = this.listener.length;
            console.log("len is " + len);
            for (var i = 0; i < len; i++)
                this.listener[i].action();
        };
        cat.listener = [];
        return cat;
    }
};

// man class
var Man = {
    createNew: function() {
        var man = { action: function() { console.log("***\nthe action of the man***\nman stop sleeping..") } };
        return man;
    }
}

// mouse class
var Mouse = {
    createNew: function() {
        var mouse = { action: function() { console.log("\n***action of mouse***\nfleeping...") } };
        return mouse;
    }
}

// man and mouse are listeners of the Cat.
var cat = Cat.createNew();
// var man = Man.createNew();
// man.action();
cat.listener.push(Man.createNew());
cat.listener.push(Mouse.createNew());

console.log("***********now cat is crying************");
cat.crying();

// get function name.
function func1() {

}

function func2(func) {
    console.log(func.name);
}

func2(func1);
