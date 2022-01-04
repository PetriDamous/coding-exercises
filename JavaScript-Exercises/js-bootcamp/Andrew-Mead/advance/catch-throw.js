// keyword throw forces an error to be printed to the console
// Error can be anything but most of the time it will be string that hints at the problem
// Error text is created by the programmer

// Example:

// const getTip = (amount) => {
    // if(typeof amount === "number") {
        // return amount * .25;
    // } else {
        // throw 'Must enter a number'; // Error that will show in the console
    // }
// }
// 
// console.log('throw: ', getTip('doggie'));

// We can use the built in Error function to get a more detail message

const getTip = (amount) => {
    if(typeof amount === "number") {
        return amount * .25;
    } else {
        throw Error('Must enter a number');  // Error that will show in the console
    }
}

// console.log('Error: ', getTip('doggie'));

// Try catch block allows us to recover from an error
// The try block will try to run the code in that block
// If the try block encouters an error the catch block will run
// We can print out the Error with the variable e in the catch block
// e.message will print the message out from the Error function in the getTip function

// Example

try {
    console.log('Error: ', getTip('doggie'));
} catch (e) {
    console.log(e.message);
}
