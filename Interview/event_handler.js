function man_handler() {
    // body...
    console.log("...man is awake...");
}

function mouse_handler() {
    console.log("...mouse is fleeping...");
}

// Import events module
var events = require('events');

// Fire the connection event
Cat = {
    newInstance: function(name) {
        var cat = {};
        // Create an eventEmitter object
        cat.eventEmitter = new events.EventEmitter();
        cat._name = name;
        // eventEmitter.on("man", man_handler);
        // eventEmitter.on("mouse", mouse_handler);
        cat.listeners = {};
        cat.addListener = function(func) {
            cat.listeners[func.name] = func;
            cat.eventEmitter.on(func.name, func);
        };
        cat.cry = function() {
            console.log(this._name + "...miao...miao...");
            for (var listener in this.listeners) {
                // skip loop if the property is from prototype
                if (!this.listeners.hasOwnProperty(listener)) continue;
                this.eventEmitter.emit(listener);
            }
        }

        return cat;
    }
};

var c = Cat.newInstance("c");
var c2 = Cat.newInstance("c2");
console.log(c === c2);
// add listeners to the cat.
c.addListener(man_handler);
c.addListener(mouse_handler);
c2.addListener(mouse_handler);

c.cry();
c2.cry();
