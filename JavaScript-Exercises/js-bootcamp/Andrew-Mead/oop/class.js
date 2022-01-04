// Works the same way as setting up a constructor function and prototypes
// It just looks different

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

const person1 = new Person('Chris', 'Redfield', 45);

// console.log(person1)

console.log(person1.getBio()) // Chris is 45 years old.

person1.setName('Jill Valintine') // Sets firstName to Jill and lastName to Valintine

console.log(person1.firstName) // Jill