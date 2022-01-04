const movieReviews = {
	Arrival                : 9.5,
	Alien                  : 9,
	Amelie                 : 8,
	'In Bruges'            : 9,
	Amadeus                : 10,
	'Kill Bill'            : 8,
	'Little Miss Sunshine' : 8.5,
	Coraline               : 7.5
};

// THIS DOES NOT WORK!
// OBJECTS ARE NOT ITERABLE (can't use a for...of loop)
for (let x of movieReviews) {
	console.log(x);
}

// We CAN iterate over the keys of an object
for (let movie of Object.keys(movieReviews)) {
	console.log(`You rated ${movie} - ${movieReviews[movie]}`);
}

// We can also iterate over the values
// To calculate the average movie rating:
const ratings = Object.values(movieReviews);
let total = 0;
for (let r of ratings) {
	total += r;
}
let avg = total / ratings.length;
console.log('Average Rating: ', avg);

//////////////// Object.keys() ///////////////////////////////////

// The Object.keys() method returns an array of a given object's own enumerable property names, 
// iterated in the same order that a normal loop would.

const object1 = {
	a: 'somestring',
	b: 42,
	c: false
};
  
console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

// Object.keys() returns an array whose elements are strings corresponding to the 
// enumerable properties found directly upon object. The ordering of the properties is the 
// same as that given by looping over the properties of the object manually.

////////////////////// Object.value() ///////////////////////////////

// The Object.values() method returns an array of a given object's own enumerable property values, 
// in the same order as that provided by a for...in loop. (The only difference is that a for...in loop 
// enumerates properties in the prototype chain as well.)

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};

console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]


// Object.values() returns an array whose elements are the enumerable property values found on the object. 
// The ordering of the properties is the same as that given by looping over the property values of the object manually.
