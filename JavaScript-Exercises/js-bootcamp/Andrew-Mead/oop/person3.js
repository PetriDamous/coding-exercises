const Person = function(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;    
}

const person1 = new Person('Chris', 'Redfield', 45);

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age} years old.`

    return bio;
}

// Will run the first getBio
console.log(person1.getBio()); // Chris is 45 years old.

Person.prototype.getBio = function() {
    return 'Test Test';
}

// Will run the second getBio
console.log(person1.getBio()); // Test Test

// Property shadowing

// When a method is called on an instance JavaScript will first look at the properties inside of the instance to see if it has it
// If the instance contains the method it will be ran
// If not then JavaScript will try to see if the instance is inheriting the method from the prototype
// If it finds the method in an inherited prototype the the method will be ran

// Sets a method directly on the person1 instance
// Note: This version of getBio is only relavent to the person1 instance. If we created another instance will not have this version of getBio
person1.getBio = function() { return 'The mission' }

// Will run getBio method that is inside of the person1 instance
// The prototype getBio is never ran because the method inside of the instace is ran then JavaScript stops looking for a getBio method
console.log(person1.getBio()) // The mission