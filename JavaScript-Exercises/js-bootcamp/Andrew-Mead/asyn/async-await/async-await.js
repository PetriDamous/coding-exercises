// By adding the keyword async to a function the return from the function is going to be a promise
const myAsync =  async () => {

}

console.log(myAsync()) // Promise { undefined }

// Since a function that contains the keyword async returns a promise
// we can fetch and process the data like how we have been doing with promises 

const processData = async () => 12;

// Throwing an error

// const processData = async () => {
//     throw new Error('Something went wrong')
//     return 12;
// };

processData().then(data => console.log('processData', data)).catch(e => console.log(e)); // 12


// Using async function and await operator

const multi2 = (num) => new Promise((resolve, reject) => {

    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Must enter a valid number');
    }, 5000)
    
});

const getNum =  async () => {

    // The await operator returns a promise using the multi() function
    const num = await multi2(3)

    console.log('getNum', num)
}

getNum();

// We can also chain together promises using asyc/await
const chain = async () => {

    // Works similar to chaining .then() methods
    // Store return value in variable and pass it to next await call
    let num = await multi2(3)
    num = await multi2(num)

    console.log('chain', num)
}

chain()

// Thowing error and using promise chaining

// newAsync is called on and has a argument passed to it from the promise chain below newAsync
// Since async functions return a promise the promise is returned to the promise chain below
const newAsync = async (num) => {

    num = await multi2(num) // will throw an error when it runs
    num = await multi2(num)

    return num;
}

// We can now use newAsync in a promise chain like we have been doing with promise chaining
// Since our argument is not a valid number we will get an error

// We are using newAsync() as our function in the promise chain
// Whatever is returned from this function will be passed down the promise chain
newAsync('f').then(num => console.log('Number', num)).catch(e => console.log('Error', e));