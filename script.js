let arrayOfObjects = [
	{gender: 'male', name: 'david',single: false},
	{gender: 'female', name: 'annelle',single: false},
	{gender: 'male', name: 'simon',single: true}];

for(let key in arrayOfObjects) {
	if( key.gender =="male") {
		return key;
	}
};