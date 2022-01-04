////////////// toUpperCase method ///////////////////

let myStr = "chris redfield";

// Upper cases all lowercase letters in string
console.log(myStr.toUpperCase()); // "CHRIS REDFIELD"

// Strings are immutable so if you want to store the
// new value of your string you will have to overwrite
// the old variable or store it in a new variable.
myStr = myStr.toUpperCase(); 

console.log(myStr); // "CHRIS REDFIELD"

///////////// toLowerCase method ///////////////////////

let myStr2 = "JILL VALINTINE";

// Lower cases all uppercase  letters in string
console.log(myStr2.toLowerCase()); // "jill valintine"

myStr2 = myStr2.toLowerCase();

console.log(myStr2); // "jill valintine"

/////////////// trim method ////////////////////////////

let myStr3 = "  What is this?   ";

// Removes all leading and and ending spaces
console.log(myStr3.trim()); // "What is this?"

myStr3 = myStr3.trim();

console.log(myStr3); // "What is this?"