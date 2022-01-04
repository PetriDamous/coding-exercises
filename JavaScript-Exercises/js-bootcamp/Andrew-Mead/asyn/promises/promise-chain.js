const multi2 = (num) => new Promise((resolve, reject) => {

    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Must enter a valid number');
    }, 2000)
    
});

// Promise chaining
// We can chain together multiple .then methods to make multiple promise calls
// Each promise call must run before the next one can run
// .catch method will catch any errors that occur at any point in the promise chain

// In this example we are returning our multi2 function and passing the completed promise value into another .then method
// to make another promise call using the value we returned from the previous promise call

multi2('d').then((data) => multi2(data)).then((data) => console.log(`Resolved: ${data}`)).catch((err) => console.log(err));