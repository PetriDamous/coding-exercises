///////////// Accessing object properties ////////////////////

const palette = {
	red    : '#eb4d4b',
	yellow : '#f9ca24',
	blue   : '#30336b',
  100    : 'one-hundered'
};

// DOT NOTATION
console.log(palette.red); //'#eb4d4b'

// SQUARE BRACKET NOTATION
console.log(palette['yellow']); //'#f9ca24'

// With square brackets, we can also use dynamic key names:

let mysteryColor = 'blue';
console.log(palette[mysteryColor]); //'#30336b'

// Square brackets evaluates expressions
console.log(palette['yell' + 'ow']); // '#f9ca24'


// Bracket notation converts 100 into a string and finds
// 100 key which has also been converted to string (we just don't see it)
console.log(palette[100]); // one-hundered

// Same as accessing 100 from above code but this time
// we provide the string oursevles
console.log(palette['100']); // one-hundered