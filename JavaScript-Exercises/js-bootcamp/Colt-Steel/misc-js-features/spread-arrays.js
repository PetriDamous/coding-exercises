const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];


const mollusca = [...cephalopods, ...gastropods]
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish", "giant african snail", "banana slug", "variable neon slug"]

const inverts = [...cnidaria, ...gastropods, ...cephalopods]
//["fire coral", "moon jelly", "giant african snail", "banana slug", "variable neon slug", "dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

const cephCopy = [...cephalopods];
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

// Most common use case for using spread in an array is to make a copy of an array.

// The copy of the array using spread will not have the same object reference 
// as the array it was copied from (we are only copying the contents not setting
// a new reference)

// This does not go multiple levels deep. So if you are making a copy of an array
// that has other arrays or objects as its contents then those contents will be
// referenced in the new array. New array is not referenced but contents are.


// We can spread strings into an array
// Not common but we can do that
// Similar to alpha.split('')

let alpha = 'abcdef';

const alphaArray = [...alpha];

console.log(alphaArray);