// Arrow functions don't bind the this keyword

const pet = {
    name: 'Scrappy',
    getGreeting: () => {
        return `Hello ${this.name}!`
    }
}

console.log(pet.getGreeting()); // Error

// JavaScript provides a method definition shorthand syntax
// Turn the key value into a function and it works the same

const dog = {
    name: 'Scrappy',
    getGreeting()  {
        return `Hello ${this.name}!`
    }
}

console.log(dog.getGreeting()); // 'Hello Scrappy'

// Arrow functions don't bind arguments
// We can use the arguments in regular functions
// Arguments is a local variable of the function

const add = function () {
    return arguments[0] + arguments[1];
}

console.log(11, 22, 33,  44); // 33

const sub = () => {
    return arguments[0] - arguments[1];
}

console.log(11, 22, 33,  44); // error