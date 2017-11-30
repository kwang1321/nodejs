'use strict'
var Employee = function(name, company, salary) {
	this.name = name || '';
	this.company = company || '';
	this.salary = salary || 3000;

	// private method.
	var increaseSalary = function(){
		this.salary += 1000;
	}

	// public method.
	this.displayIncreacedSalary = function() {
		increaseSalary.call(this);
		console.log(this.salary);
	};
}

var emp1 = new Employee("John", "NHY", 1000);
emp1.displayIncreacedSalary();
emp1.displayIncreacedSalary();
emp1.displayIncreacedSalary();
emp1.displayIncreacedSalary();
emp1.displayIncreacedSalary();
emp1.displayIncreacedSalary();
emp1.displayIncreacedSalary();