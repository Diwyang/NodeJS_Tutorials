var person = {
	firstname: 'Diwyang',
	lastname: 'Jain',
	greet: function() {
		console.log('Hello, ' + this.firstname + ' ' + this.lastname);
	}
};

person.greet();

console.log(person['firstname']);