///////////////////////// splice() ////////////////////////////////////

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// Does mutate orignial array

//////////////////////////// Syntax ///////////////////////////////////

// array.splice(start[, deleteCount[, item1[, item2[, ...]]]]);

// 1st argument is the starting index

// 2nd argument is how many items you wish to delete

// optional other arguments are the items 
// we wish to place inside of our array

/////////////////// Adding item in middle of array /////////////////////

let re2 = ['Leon', 'Claire', 'Ada', 'Sherri', 'William'];

// 2nd argument 0 means delete nothing
let ben = re2.splice(3, 0, 'Ben');

console.log(re2); // [ 'Leon', 'Claire', 'Ada', 'Ben', 'Sherri', 'William' ]

////////////////// Replacing items and inserting items ////////////////////

re2 = ['Leon', 'Claire', 'Ada', 'Sherri', 'William'];

// When removing array items spice() returns an array
// of the removed array items that we can store in a variable
let rmvChara = re2.splice(2, 3, 'Chris', 'Jill', 'Barry');

console.log(rmvChara); // [ 'Ada', 'Sherri', 'William' ]

// New items are added to array starting at index 2
console.log(re2); // [ 'Leon', 'Claire', 'Chris', 'Jill', 'Barry' ]

///////////////////// Deleting with splice() ///////////////////////////

re2 = ['Leon', 'Claire', 'Ada', 'Sherri', 'William'];

let remove = re2.splice(2, 3);

console.log(re2); // [ 'Leon', 'Claire' ]

console.log(remove); // [ 'Ada', 'Sherri', 'William' ]