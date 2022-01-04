// Short hand way of using an arrow function when you have only one return valure
const squareShort = (num) => num**2;

console.log("short hand: ", squareShort(3));

console.log('\r');


// When we have a single argument you can omit the ()
const squareSingle = num => num**2;

console.log('No (): ', squareSingle(4));

console.log('\r');


// Longer way of writing the above
const squareLong = (num) => {
    return num**2;
}

console.log('long hand:', squareLong(5));

console.log('\n');


/***** Using Arrow functions in methods **********/

const people = [{
    name: 'Chris',
    alive: true
}, {
    name: 'Whesker',
    alvie: false
}, {
    name: 'Jill',
    alive: true
}];

// Short hand to return alive people
const alive = people.filter((people) => people.alive);

console.log('alive: ', alive);

console.log('\r');

// Long hand to return dead people
const dead = people.filter((people) => {
    return !people.alive;
});

console.log('dead: ', dead);

console.log('\n');

/********** Challenge **************/

// 1. Find the person with age 22
// 2. Print that persons name

const students = [{
    name: 'Dan',
    age: 45     
}, {
    name: 'Dog',
    age: 12
}, {
    name: 'Akame',
    age: 22
}]

// Note: Leave off {} to leave out return statement or code won't work
const noReturn = students.filter((student) => student.age === 22  );

console.log('find 22 with no return: ', noReturn);

console.log('\r');

// When {} are left for function body use the return keyword
// Single arguments do not need ()
const withReturn = students.filter(student => { return student.age === 22} );

console.log('find 22 with return: ', withReturn);