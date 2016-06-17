var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
    console.log('listner1 executed.');
}

// listener #2
var listner2 = function listner2() {
    console.log('listner2 executed.');
}

// you should not use event below:
// eventEmitter.newListener = function(event, listener) {
//     console.log("add new listener");
// }
//in javascript, we use on to register events.
eventEmitter.on("newListener", function(event, listner) {
    console.log(event + " add new listner:" + listner.name);
});

eventEmitter.on("removeListener", function(event, listner) {
    console.log(event + " Remove listner:" + listner.name);
});


// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);



var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");
