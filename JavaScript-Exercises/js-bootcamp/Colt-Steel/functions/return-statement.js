// No return!
function add(x, y) {
	console.log(x + y);
}

// This version returns the sum of x & y;
function add(x, y) {
	return x + y;
}

// We can capture the return value:
const total = add(4, 9); //13

// You can only return one value.
// If you need to retrun more than one value you will have
// to either put it in a data structure like an array or a something
// like a string.

// You can have multiple returns inside of a function.

// When a return statment is ran the value is returned and the fucntion
// is existed.
