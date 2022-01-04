'use strict'

const notes = ['Note 1', 'Note 2', 'Note 3'];

// Get length of array (how many items in array)
console.log(notes.length); // 3


// Accessing items in array
console.log(notes[0]); // Note 1
console.log(notes[22]); // undefined
console.log(notes[notes.length - 1]); // Note 3

console.log('\n');

// Add items to end of array
console.log('Push: ', notes.push('Note 4'));

console.log('Push: ', notes);
console.log('\r');

// Remove last item of an array
console.log('Pop: ', notes.pop()); // returns the item that is being removed. We can store this item in a variable for later use if we want

console.log('Pop: ', notes);
console.log('\r');

// Removes item at the begining of an array
console.log('Shift: ', notes.shift()); // returns the item that is being removed. We can store this item in a variable for later use if we want

console.log('Shift: ', notes);
console.log('\r');

// Adds item to begining of array
console.log('UnShift: ', notes.unshift('Note 0'));

console.log('UnShift: ',notes);
console.log('\r');

// splice() method modifies/mutates the contents of an array

// Removes item in array. First argument is the position. Second is how many items you want to remove
console.log('Splice Remove: ', notes.splice(1, 1));

console.log('Splice Remove: ', notes);
console.log('\r');

// Adds item to an array. First argumen is the position. Second is how many items to be removed (0 means no items to be removed)
// Last argument is what we want to add.
// We can use this to replace items as well. Just modify the second argument
console.log('Splice add Note 5: ', notes.splice(1, 0, 'Note 5'));

console.log('Splice add Note 5: ', notes);
console.log('\r');

// Replace item in array with new value using bracket notation
console.log('Bracket replace: ', notes[2] = 'Note 6');

console.log('Bracket replace: ', notes);
console.log('\r');

// Add item to array using bracket notation
console.log('Bracket replace: ', notes[3] = 'Note 7');

console.log('Bracket replace: ', notes);
console.log('\r');

// Loop through array using forEach method
notes.forEach(function(item, idx){
    console.log(`${idx}: ${item}`);
});

console.log('\r');

// Count to 10 using for loop
for (let i = 0; i <= 10; i++) {
    console.log('Count to 10: ', i);
}

console.log('\r');

// Count to 0 starting with 5
for (let i = 5; i >= 0; i--) {
    console.log('Count to 0: ', i);
}

console.log('\r');

// Print items in array in order using for loop
for (let i = 0; i < notes.length; i++) {
    console.log(`Item ${i}: `, notes[i]);
}

console.log('\r');

// Print items in array in reverse order using for loop
for (let i = notes.length - 1; i >= 0; i--) {
    console.log(`Item ${i}: `, notes[i]);
}

console.log('\r');

// indexOf();
// Returns the index position of an array item
console.log(notes);
console.log('Index of Note 0: ', notes.indexOf('Note 0')); // 0 the position of 'Note 0'

console.log('\r');

// If an item is not found -1 is returned
console.log(notes);
console.log('Index of item not in array: ',notes.indexOf( 'Note 1000')); // -1

console.log('\r');

// If there are duplicate items in the array, indexOf() will return the first index of the occurance of the duplicate item
console.log(notes.unshift('Note 0'));
console.log(notes);
console.log('First occurance of Note 0: ', notes.indexOf('Note 0')); // 0

console.log('\n');

// indexOf() when finding objects
console.log('/// objects in array ////');
console.log('\r');

const array1 = [
    {},
    {
        title: 'Wash dishes',
        body: 'Remember to was dishes'
    },

    {
        title: 'Clean bathroom',
        body: 'Rembmer to unclog drains and clean bathtub'
    },

    {
        title: 'Pay electric bill',
        body: 'Electric bill is due'
    }
]

console.log('indexOf object in array: ', array1.indexOf({})); // -1

console.log('\r');

// We are getting -1 because the indexOf() uses ===  to compare items when it iterates over an array
// An object is only equal to itself if the object reference is pointing to the same object in memory

// Example
console.log('Two diffrent objects: ', {} === {}); // false

// We get false because we are comparing two different objects in memory

console.log('\r');

let obj1 = {};
let obj2 = obj1;
console.log('Two variables referencing the same object: ',obj1 === obj2); // true

// We get true because both variables obj1 and obj2 are pointing to the same object in memory

console.log('\n');

// findIndex()

console.log('///// findIndex() //////');

// Used to find the index of an array item
// More flexiable than indexOf as we can use findIndex to find object properties
// Much like indexOf, -1 is returned if an item is not found
// Works great for when you need the index of the item

const index = array1.findIndex(function(elm, idx) {
    console.log(`${idx}: `, elm);
    return elm.title === 'Pay electric bill'; // returns true and stores the found index in variable
});

console.log('Found index: ', index);

// We want findIndex() to return a truthy or falesy statment for the return value
// If true is returned the index of the array item is returned and the function stops (it does not continue to search)
// If false is returned then -1 is returned

console.log('\n');

// find()
console.log('///// find() //////');

// Works similar to findIndex
// Returns the array item instead of index 
// If item is not found undefined is returned
// Works great if you are just wanting to find an item without its index
// Index is an optional argument if you need it
// Return is either true or false like findIndex()
// If true then found item is returned, if false then undefined is returned

const title = array1.find(function(elm, idx) {
    console.log(`${idx}: `, elm);
    
    if (elm.title != undefined) {
        return elm.title.toUpperCase() === 'Pay electric bill'.toUpperCase(); // return stores array item
    }   
    
});

console.log('Found title: ', title);

// Note: When passing arrays into functions the argument that gets used in the function is still pointing at the orignal array
// That means much like objects getting passed into a function you have access and can manipulate that array inside of a function

console.log('\n');

///////////////////// filter() //////////////////////

console.log('////// filter() ////////');

// filter() much like find() and findIndex() we are returning a boolean
// filter() generates an array based on its return value
// if the boolean in the call back function returns true that item in the array is added to our filter() array
// if the boolean in the call back function returns false then that array item is not added to our filter() array
// First argument on call back function is the array item
// Second argument on call back function is the arrray item index

let array2 =  [
    {
        title: 'Walk cat',
        body: 'Walk Fido at 11pm'
    },

    {
        title: 'Clean basement',
        body: 'I would like to finish by this weekend'
    },

    {
        title: 'Pay gas bill',
        body: 'Gas bill is $28.56 this month'
    }
];

const arrayFilter = array2.filter(function (elm, idx) {
    const title = elm.title.includes('aS'.toLowerCase());
    const body = elm.title.includes('aS'.toLowerCase());

    return title || body;

});

console.log('Filtered array: ', arrayFilter);

console.log('\n');

///////////// sort() /////////////////////////////

console.log('/////////////// sort() /////////////////////');

// sort() on simple array with no arguments

let months = ['March', 'Jan', 'Feb', 'Dec'];

console.log('Sort months' , months.sort()); // [ 'Dec', 'Feb', 'Jan', 'March' ]

// Much like indexOf() sort() by itself works great on simple arrays
// But with more complex array elements such as objects it does't work so great by itself
// Luckly sort() allows use to have a call back function to work with more complex array elements
// Call back function is called compareFunction

// Call back function takes two parameters
// These parameters are usually named a and b

// Call back function returns 1 of 3 values:
// 1. -1 which means a comes before b
// 2. 1 which means b comes before a
// 3. 0 which means order is unchanged

// sort() doesn't return a final value.  It just sorts the array in place when called on

console.log('\r');

let array3 =  [
    {
        title: 'Fat fish',
        body: 'I love fish which is my fav dish'
    },

    {
        title: 'Eric B and Rakim',
        body: 'Follow the leader!!!!'
    },

    {
        title: 'Ao Go Power Rangers',
        body: 'Billy chaos'
    }
];

array3.sort(function(a, b) {    

    if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
    } else {
        return 0;
    }

});

console.log('Object sort: ', array3);







