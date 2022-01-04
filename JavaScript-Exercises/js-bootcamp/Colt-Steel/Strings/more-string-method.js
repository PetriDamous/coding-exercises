let myStr = "catdog";

console.log(myStr.indexOf('cat')); // 0

console.log(myStr.indexOf('dog')); // 3

console.log(myStr.indexOf('Chris')); // -1

let myStr2 = "baseball";

// Returns the index of the first instance of b
console.log(myStr2.indexOf('b')); // 0

let myStr3 = "Baseball";

// indexOf is case sensitive
// Skips capital B and finds lowercase b
console.log(myStr3.indexOf('b')); // 4

//////////////// slice method ////////////////////

let myStr4 = "basketball";

// Single argument will start at provided index (3 in this case)
// and slice to end of string.
console.log(myStr4.slice(3)); // 'ketball'

// 1st argument where we want to begin slicing.
// 2nd argument where we want to end our slice. Not inclusive
// so the slice stops at index 3 in this example.
console.log(myStr4.slice(0, 4)); // 'bask'

////////////// replace method ///////////////////////

let myStr5 = "I love cats!!!!!";

// With single argument we will get undefined
console.log(myStr5.replace('cats')); // 'I love undefined!!!!!'

// 1st argument is the sub string we want to replace.
// 2nd argument is a string that we want to replace the 1st
// argument with.
console.log(myStr5.replace('cats', 'dogs')); // 'I love dogs!!!!!'

// If sub string cannot be found string method is called on will be returned
// with no changes.
console.log(myStr5.replace('monkey', 'rhino')); // 'I love cats!!!!!'

let myStr6 = 'haaa haaa haaa';

// Only replaces the first instance it finds.
console.log(myStr6.replace('haaa', 'heee')); // 'heee haaa haaa'
