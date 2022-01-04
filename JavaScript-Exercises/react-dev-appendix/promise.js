// Promises are a way of handling asynchronous events in JavaScript
// A promise is a promise that an object will eventually have a value
// A promise waits for a value to either resolve or reject
// Resolve means that our request was completed without error
// Reject means that our request had some kind of error


// Declaring a promise
// Promises take two arguments
// First argument is resolve
// Second argument is reject
const myFirstPromise = new Promise((resolve, reject) => {
    if (true) {
        setTimeout(() => {
            // if the request is resolved then the value 'It worked!!' is returned
            resolve('It worked!!!');

        }, 1000);
    } else {
        // if the request is rejected then the value "It didn't work" is returned
        reject("It didn't work");

    }

});

// .then is for resolved result
// .catch is for reject result
myFirstPromise
    // .then takes an argument which is the value of the resolved result
    .then(value => console.log(value))
    // .catch takes an argument which the value of the rejected result
    .catch(rejectValue => console.log(rejectValue));

    
/*

Result in console:

'It worked!!!!'

*/


// Reject example

const mySecondPromise = new Promise((resolve, reject) => {
    if (false) {
        setTimeout(() => {

            resolve('It worked!!!');

        }, 1000);
    } else {
        // reject is returned
        reject("It didn't work");

    }

});

mySecondPromise
    .then(value => console.log(value))
    // .catch kicks in because value is rejected
    .catch(rejectValue => console.log(rejectValue));


/*

Result in console:

"It didn't work"

*/

// We can also chain together multiple resolved promises using .then

myFirstPromise
    .then(value => value = 'I like turtles')
    .then(newValue => console.log(newValue))
    .catch(rejectValue => console.log(rejectValue));


// Note: .then returns a resolved promise. This is why we are able to chain
// multiple .then and pass a resolved promise from another .then to the next .then    

/*

Result in console:

'I like turtles'

*/    