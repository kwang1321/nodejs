'use strict'
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

//Professional.__proto__ === Person.
var Professional = Object.create(Person);

Professional.init = function(prefix, first_name, last_name) {
    Person.init.call(this, first_name, last_name);
    this.prefix = prefix;
    return this;
};
Professional.prof_name = function() {
    return this.prefix + " " + this.first_name + " " + this.last_name;
};

// we can use 3 ways methioned in file prototype_chain1.js to create a new object.
// here, we use the init method.
var prof = Object.create(Professional);
prof.init("Dr.", "Karl", "Wang");
console.log(prof.prof_name());
console.log(prof.full_name());

Professional.set_age = function (age) {
    // body...
    this.age = age;
}
Professional.get_age = function() {
    return this.age;
}

prof.set_age(60);
console.log(prof.get_age());
