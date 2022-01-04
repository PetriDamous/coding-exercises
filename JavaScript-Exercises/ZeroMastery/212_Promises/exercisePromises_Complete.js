// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

//Solution 1
const promise =  new Promise((resolve, reject) => {
  setTimeout(() => resolve('success'), 4000);
});

//Solution 2
const promise = new Promise((resolve) => setTimeout(resolve, 4000, 'success'));



// #2) Run the above promise and make it console.log "success"

//Solution 1
const promise =  new Promise((resolve, reject) => {
  setTimeout(() => resolve('success'), 4000);
});

promise.then(result => console.log(result));

//Solution 2
const promise = new Promise(resolve, 4000, 'success');


promise.then(result => console.log(result));


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

//Solution
const promise = Promise.resolve(setTimeout(() => console.log('success'), 4000));
console.log(promise);


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')

//Solution

//Not real solution. Promise still gets resolved even though console.log displays
Promise.reject('failed').catch(() => console.log('Oooops something went wrong'));

//Real Solution
Promise.reject('failed').catch(console.log('Oooops something went wrong'));



// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

//Solution
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => {
  return fetch(url).then(reqs => reqs.json())
}))
  .then(data => console.log(data))
  .catch((e) => console.log(`It didn't work.....: ${e}`));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?

const urls = [
  'https://swapi.co/api/peopl/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => {
  return fetch(url).then(reqs => reqs.json())
}))
  .then(data => console.log(data))
  .catch(e => console.log('It didn\'t work.... ', e));

//Lecture Bonuses 

// #1) Create a simple promise that resolves or rejects
// If the promise resolves have it return 'It worked!!!'
// If the promise is reject have it return 'My mistake..'
// Run the promise and console.log the results 

//Solution Resolve 
const promise = new Promise((resolve, reject) => {
  let resolveReject = true;
  if(resolveReject){
    return resolve('It worked!!!');
  } else{
    return reject('My mistake...');
  }
});

promise.then(result => console.log(result));

//Solution Reject
const promise = new Promise((resolve, reject) => {
  let resolveReject = false;
  if(resolveReject){
    return resolve('It worked!!!');
  } else{
    return reject('My mistake...');
  }
});

promise.then(result => console.log(result));

// #2) Call on a promise and add three "!!!" to it worked when promise is resovled.
// Add three "..." when promise is rejected

//Solution Resolve
const promise2 = new Promise((resolve, reject) => {
  if(1){
    resolve('It worked');
  } else {
    reject('My mistake');
  }
});

promise2.then(result => result).then(result2 => console.log(result2 + "!!!"));

//Solution Reject
const promise2 = new Promise((resolve, reject) => {
  if(0){
    resolve('It worked');
  } else {
    reject('My mistake');
  }
});

//"My mistake" will still be returned as normal. Resolve returns a value that we can use. Reject only returns a reason why a promise is rejected
//and not a value we can use
promise2.then(result => console.log(result + "...")).then(result2 => console.log(result2 + "..."));

// #3) Place catch block that will only catch errors before result3 and will console.log 'crap'

const addPromise = Promise.resolve(1);

addPromise.then(result => {
  result + 1
})
  .then(result2 => {
    throw Error
    result2 + 2
  })
  .then(result3 => {
    throw Error
    result3 + 3
  })
  .then(console.log);

//Solution
const addPromise = Promise.resolve(1);

addPromise.then(result => {
  result + 1
})
  .then(result2 => {
    throw Error
    result2 + 2
  })
  .catch((console.log('crap!!!!')))
  .then(result3 => {
    throw Error
    result3 + 3
  })
  .then(console.log);

// #4) Now use a catch block that will only catch errors from the result 3 and above.
//Note we will leave our catch block that caught errors from result 2 on up in.
//Make sure to use a function for that block or that catch block will still console.log regaurdless of errors

//Solution
const addPromise = Promise.resolve(1);

addPromise.then(result => {
  result + 1
})
  .then(result2 => {
    //throw Error
    result2 + 2
  })
  .catch(() => (console.log('crap!!!')))
  .then(result3 => {
    throw Error
    result3 + 3
  })
  .catch(() => console.log('blast!!!'))
  .then(console.log);

// #5) Write 4 promises that will resolve after set amount of time and use Promise.all to console.log them

//Solution 1
const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'promise1 here'));

var promise2 = Promise.resolve(setTimeout(() => 'promise2 here', 2000));

const promise3 = new Promise((resolve) => setTimeout(resolve, 3000, 'promise3 here'));

var promise4 = Promise.resolve(setTimeout(() => 'promise4 here'), 4000);

Promise.all([promise1, promise2, promise3, promise4])
  .then(data => {
    console.log(data[0]);
    console.log(data[1]);
    console.log(data[2]);
    console.log(data[3]);
  });

//Solution 2
const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'promise1 here'));

const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'promise2 here'));

const promise3 = new Promise((resolve) => setTimeout(resolve, 3000, 'promise3 here'));

const promise4 = new Promise((resolve) => setTimeout(resolve, 4000, 'promise4 here'));

Promise.all([promise1, promise2, promise3, promise4]).then(data => data.forEach(p => {
  console.log(p);
}));



