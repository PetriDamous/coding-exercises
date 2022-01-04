// Closures gives access to an outer functions scope from an inner function
// They can be used for object data privacy, event handlers and callbacks, currying, etc.

// Example 1
const createCounter = () => {
    let count = 0;

    // The function in the return gives outside access to the variable inside of the parent function
    return () => {
        return count // gives outside world access to count
    }
}

const counter = createCounter(); // parent function must be stored in a variable in order for the fuction in the return to execute

console.log(counter()); // 0

console.log('\n')

// Example 2

// In the example below the variable count can only be accessed by using one of the methods in the return statement
// This protects the variable so it can not be modified by outside code

const counting = () => {
    let count = 0;

    return {
        add() {
            count++
        },

        sub() {
            count--
        },

        get() {
            return count;
        }
    }
}

const operation = counting();

operation.add(); // adds 1
operation.add(); // add 1

console.log(operation.get()); // 2

operation.sub(); // subtracts 1

console.log(operation.get()); // 1

console.log('\n')

// Example 3
// This use case of closure is known as currying
// Currying is the process of converting a function with several arguments into a sequence of functions that each takes a single argument

const adder = (a) => {
    // a = 10 and b = 2
    return (b) => {
        return a + b;
    }
}

const add10 = adder(10); // Creates a base so we can add numbers with 10
console.log(add10(2)) // allows us add 10 to any number we pass into the argument (12)

console.log('\r');

// Challenge

// 1. Create createTipper wich takes in the base tip (.15 for 15% tip)
// 2. Set it up to return a function that takes in the bill amount
// 3. Call createTipper to generate a few functions for different percentages
// 4. Use the generated functions to calculate tips and print them

const createTipper = (tip) => {

    return (amt) => {
        return amt * tip;
    }
}

const tip15 = createTipper(.15);

console.log(tip15(10)) // 1.5