'use strict';
var animal = {
    kind : "human"
};

// var asim = {
//     name : "asim"
// };
// asim.__proto__ = animal;

// usually, we are not using above way but using Object.create();
// asim,__proto__ === animal
var asim = Object.create(animal, {food : {value : "Mongo"}});

console.log(asim.food); // be very concern about that. The second parameter is not a json but a 
// description of asim's propoty.

// we are using prototype chain to connect asim and animal.
console.log(asim.kind);
console.log(animal.isPrototypeOf(asim));
// we change the propoties of the prototype of asim.
animal.kind = 'elv';
// elv
console.log(asim.kind);
// but we change the asim's propoties. it will add one propoty
asim.kind = 'orcs';
console.log(asim.kind);
console.log(animal.kind); // still elv. that because it adds asim one propoty.