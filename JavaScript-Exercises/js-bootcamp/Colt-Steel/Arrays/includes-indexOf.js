////////////// includes() and indexOf() //////////////////////////

/////////////////// includes() ///////////////////////////////////

// Checks to see if an array item exists.

// Returns boolean value based on if item exists in
// array or not.

const games = ['Donkey Kong', 'Super Mario', 'Sonic', 'Castlevania'];

let game1 = games.includes('Donkey Kong');

console.log(game1); // true

let game2 = games.includes('Sypro');

console.log(game2); // false

// Must be exact match
let game3 = games.includes('donkey kong');

console.log(game3); // false

// Unlike .includes() called on strings 
// .includes() called on array is looking for
// whole item not partiale item
let game4 = games.includes('Donkey'); 

console.log(game4); // false

// 2nd argument for .includes() is the starting array position
let game5 = games.includes('Sonic', 1);

console.log(game5); // true

let game6 = games.includes('Super Mario', 3);

console.log(game6); // false

// Conditinal example

if (games.includes('Sonic')) {
  console.log('We have Sonic!!!'); // 'We have Sonic!!!!!'
}

// Good for if you just need to check the position of an array item
// and you do not need to know the position.

////////////////// indexOf() /////////////////////////////////////

// indexOf() returns the array position if item exits
// in array.

// If item cannot be found in array -1 is returned

const anime = ['Project A-ko', 'Gundam', 'Macross', 'Gunsmith Cats'];

let anime1 = anime.indexOf('Gundam');

console.log(anime1); // 1

let anime2 = anime.indexOf('X');

console.log(anime2); // -1

// Must be exact match similar to .includes()
let anime3 = anime.indexOf('macross');

console.log(anime3); // -1

// 2nd argument is the starting array position for the search
let anime4 =  anime.indexOf('Gunsmith Cats', 2);

console.log(anime4); // 3

// Good for when you need to know the position of an array item.



