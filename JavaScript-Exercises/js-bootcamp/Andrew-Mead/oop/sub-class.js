// Sub classes are children of a parent class
// Sub class has access to parent class methods and values we pass into parents constructor function
// We can use a parent class to create a base class and create many sub classes from the parent class to have unquie and individual classes based off of parent function
// Sub classes come in handy when you have a unquie peice of data for an object 


// Prototype chain:
// Person class: myPerson --> Person.prototype --> Object.prototype --> null
// Employee class: myEmployee --> Employee.prototype --> Person.prototype --> Object.prototype --> null

class Person {

    // Our Constructor function
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Prototype method
    getBio() {
        let bio = `${this.firstName} is ${this.age} years old.`

        return bio;        
    }

    // Prototype method
    setName(fullName) {
        const names = fullName.split(' '); // Splits name into an array ( ['Jill', 'Valintine'] )
        this.firstName = names[0]; // Jill
        this.lastName = names[1]; // Valintine
    }
}

// Sub class of Person 
// extends keyword allows us to inherite from Person class
class Employee extends Person {

    // Sets constructor for sub class
    // Overrides constructor from parent class
    constructor(firstName, lastName, age, position) {

        // Allows us to use parent class constructor
        super(firstName, lastName, age);

        // Specific to Employee class
        this.position = position;
    }

    // This version of getBio overrides the Person getBio method
    // We first look in this class to see if we have a getBio method
    // Since we do we use the getBio that is inside of Employee
    // If Employee did not have a getBio method we would look at the parent class Person

    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}`;
    }

    // Custom method that is unique to the Employee class
    getYearsLeft() {
        return 65 - this.age;
    }
}

const person1 = new Person('Chris', 'Redfield', 45);

// console.log(person1)

console.log(person1.getBio()) // Chris is 45 years old.

person1.setName('Jill Valintine') // Sets firstName to Jill and lastName to Valintine

console.log(person1.firstName) // Jill

// Creats a new instance based on sub class
const employee1 = new Employee('Leon', 'Kennedy', 40, 'cop');

// Uses getBio from Employee
console.log(employee1.getBio()); // Leon Kennedy is a cop

// Uses unique method for Employee
console.log(employee1.getYearsLeft()); // 