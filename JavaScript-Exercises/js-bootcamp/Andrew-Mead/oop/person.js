// Calling on an empty function or a function that has no value will retrun undefined

const person = function() {

}

const me = person();

console.log(me); // undefined

console.log('\r');

// Constructor function

const Person = function(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

// When using the new keyword in front of a function call we get what is called a constructor function
// A constructor function will return an object
// They are used to create unquie individual objects based on the data feed to it
// We cannot use arrow functions as we will need to use the keyword 'this'
// Constructor functions are like a factory. In this example the constructor function creates a person based on the arguments fed to it
// For naming convention purposes we captilize the first letter of the constructor function


// Creates indivual people
// These are known as instances
// person1 is an instance of the Person constructor
const person1 = new Person('Chris', 'Redfield', 45);

const person2 = new Person('Albert', 'Wesker', 300);

// Returns are first person
console.log(person1); // Person { firstName: 'Chris', lastName: 'Redfield', age: 45 }

// We can access the age of our person like we would in a normal object
console.log(person2.age); // 300

// We can also change the properties of each person object like we normally would
console.log(person2.name = 'Jill');

// Since constructor functions return an object we can basically treat them like how we wold with any other object

