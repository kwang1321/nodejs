var Person = {
    init : function(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
        return this;
    },
    full_name : function() {
        return this.first_name + " " + this.last_name;
    },
    name : "Person"
};

var PersonFactory = function(first_name, last_name) {
    var person = Object.create(Person);
    person.first_name = first_name;
    person.last_name = last_name;
    return person;
}

// 1. using Object.create() to initialize the parameters.
var p1 = Object.create(Person, {first_name : {value : "p1"}, last_name : {value : "itu"}});
console.log(p1.full_name());
// 2. using init method in Person.
var p2 = Object.create(Person); // p2.__proto__ === Person. so p2 has init method.
p2.init("p2", "itu");
console.log(p2.__proto__ === Person); //true
console.log(p2.full_name());

var p3 = p2.init("p3", "itu");
console.log(p3.__proto__ === Person); //true
console.log(p3.full_name());
console.log(p2.__proto__ === Person); //true
console.log(p2.full_name()); // p3 itu. that is because p2 and p3 point to the same object.

// 3. using Factory to create new object.
var p4 = PersonFactory("p4", "itu");
console.log(p4.__proto__ === Person); //true
console.log(p4.full_name());