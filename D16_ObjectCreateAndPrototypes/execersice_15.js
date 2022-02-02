var person = {
	firstname: '',
	lastname: '',
	greet: function() {
		return this.firstname + ' ' + this.lastname;
	}
}

var diwyang = Object.create(person);
diwyang.firstname = 'Diwyang';
diwyang.lastname = 'Jain';

var deejay = Object.create(person);
deejay.firstname = 'Deejay';
deejay.lastname = 'Jain';

console.log(diwyang.greet());
console.log(deejay.greet());