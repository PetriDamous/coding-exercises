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

class Student extends Person {
    constructor(firstName, lastName, age, grade) {
        super(firstName, lastName, age);

        this.grade = grade;
    }

    getBio() {
          
        const status = this.grade >= 70 ? 'passing' : 'failing'

        return `${this.firstName} is ${status} the class.`;
    }

    updateGrade(amt) {
        this.grade += amt;

    }
}

const student1 = new Student('Chris', 'Redfield', 45, 70);

console.log(student1.getBio())

student1.updateGrade(-10);

console.log(student1.getBio())

student1.updateGrade(30);

console.log(student1.getBio())

