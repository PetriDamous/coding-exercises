// Prototypal Inheritance - Allows objects created by the constructor function to have some sort of shared unquie behavior
// Usually shares a common function

const Person = function(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

// prototype is an object that we use to share anything we want with instances of a constructor function
// getBio will be the method that share with all instances from our Person constructor function
// Do not use arrow functions as we will need access to the keyword 'this'

Person.prototype.getBio = function () {
    return `${this.firstName} is ${this.age} years old.`;
}

// Instance of Person
const person1 = new Person('Chris', 'Redfield', 45);

// Instance of Person
const person2 = new Person('Albert', 'Wesker', 300);

// Calling on shared method
console.log(`person1 bio: ${person1.getBio()}`); // Chris is 45 years old.

console.log('\r');

// Prototypal Inheritance is not limited to just functions
// We can also assign a static value such as a string
// This isn't very useful to us so we will not be using it

Person.prototype.location = 'Racoon City';

console.log(`Person location: ${person1.location}`); // Racoon City

console.log('\r');

// prototype method that overrides an instances first and last name
Person.prototype.setName = function(fullName) {
    const names = fullName.split(' '); // Splits name into an array ( ['Jill', 'Valintine'] )
    this.firstName = names[0]; // Jill
    this.lastName = names[1]; // Valintine
}

person2.setName('Jill Valintine'); // Space is needed in string to split since we are spliting at a spaced string

console.log(`Over rided person2's first name to ${person2.firstName} and last name to ${person2.lastName}`); // Over rided person2's first name to Jill and last name to Valintine


console.log('\r');

// Special case for arrow function and keyword 'this'

const Person2 = function(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
}


Person2.prototype.getBio2 = function () {
    let bio = `${this.firstName} is ${this.age} years old.`

    const likes = this.likes;

    // By using an arrow function instead of a regular function we are able to grab the key word 'this' from the parent scope which is the bio variable in this case
    // If we used a regular function the code would break as the word function seprates how the keyword 'this' is inherated
    // Arrow functions do not bind the keyword 'this' so it will take the value of 'this' from its parent
    likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    });

    return bio;
}

const person3 = new Person2('Rebecca', 'Chambers', 19, ['science', 'chemistry']);

const person4 = new Person2('Barry', 'Burton', 50);

console.log(`person3 bio: ${person3.getBio2()}`);
console.log(`person4 bio: ${person4.getBio2()}`);

console.log('\r');

// split method
// method used to split up a string
const myString = '123456';

// without argument an array with the string is returned
console.log(`split no arguments: `, myString.split()); // [ '123456' ]

// with '' used in argument each substring becomes a seperate array element
console.log(`split with '': `, myString.split('')); // [ '1', '2', '3', '4', '5', '6' ]

// with 'some character' the string will be split at the character passed
// the character that is split will not be in the returned array
console.log(`split with '5': `, myString.split('5')); // [ '1234', '6' ]

// Note: myString.split(' ') will split the string by spaces but in this example will get ['123456'] since there are not any spaces

