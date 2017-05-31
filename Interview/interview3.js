var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); // bar
        console.log("outer func:  self.foo = " + self.foo); // bar
        (function() {
            console.log("inner func:  this.foo = " + this.foo); // undefined
            console.log("inner func:  self.foo = " + self.foo); // bar
        }());
    }
};
myObject.func();

// In the inner function, though, 'this' no longer refers to 'myObject'. 
// As a result, this.foo is 'undefined' in the inner function,
// whereas the reference to the local variable self remains in scope and is accessible there.