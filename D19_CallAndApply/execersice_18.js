var obj = {
	name: 'Diwyang Jain',
	greet: function() {
		console.log(`Hello ${ this.name }`);
	}
}

obj.greet();
obj.greet.call({ name: 'Deejay Jain'});
obj.greet.apply({ name: 'D Jain'});