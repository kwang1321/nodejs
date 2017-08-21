'use strict';
function Person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}
Person.prototype.full_name_proto = function() {
    return this.first_name + " " + this.last_name;  
};

// peter's __proto__ points to Person's prototype.
var peter = new Person("peter", "Guan");
peter.first_name = "chii";
peter.full_name_proto();