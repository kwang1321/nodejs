// 1. if a varible is occuered in the inner scope, javascript will not check the outer scope.
var x = 21;
var girl = function () {
    // that is the same as var x here.
    // why doesn't it show the global x 21? The reason is it checks that there is local x present.
    console.log(x);
    var x = 20;
    console.log(x);
};
girl ();

// 2. varible is hoisted. inner varible and outer varible.
(function () {
    try {
        throw new Error();
    } catch (x) {
        // x, y will be hoisted.
        var x = 1, y = 2;
        // display the inner x, but not the outer x.
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();

// 3. test object keys.
var d = {};
[ 'zebra', 'horse' ].forEach(function(k) {
    d[k] = undefined;
});

console.log(d);