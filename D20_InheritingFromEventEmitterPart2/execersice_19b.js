var util = require('util');

function Person() {
	this.firstname = 'Diwyang';
	this.lastname = 'Jain';
}

Person.prototype.greet = function() {
	console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
	Person.call(this);
	this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();