// With var you can declear a variable twice. You cannot do this with the let keyword

var name = 'Chris Redfield';

name = 'Barry Burton'; // Still works like let

var name = 'Jill Valintine'; // Perfectly legal. You can not do this with the keyword let

console.log(name);

// var, unlike let, is function scoped and not blocked scoped

if (true) {
    var firstName = 'Chris';
}

console.log(firstName); // Has access to firstName. You cannot do this with the keyword let

const setName () {
    var lastName = 'Redfield';
}

setName();

console.log(lastName); // Gives error becasue keyword var is function scoped


// You can call on var before it is declared
// You cannot do this with the keyword let

console.log(cat); // undefined

var cat; 

console.log(cat); // error

let cat; 


// The var gets hoisted to the top of the program so it looks like this:

var cat;
console.log(cat); // undefined

// Thats why in the above example var returns undefined while let thorws an error

// If we where to assign a value to var after it is called on we will get undefined

console.log(dog); // undefined

var dog = 'Scappy Doo';

// This is because only the declaration of the varible var gets hoisted and not the value

// If we where to assign a value to var before we declare var the value will be assigned to var

age = 200;
console.log(age); // 200
var age;

// Once again var is hoisted to the top of the program so it looks like this:

var age;
age = 200;
console.log(age); // 200


