// Truthy - Values that resolve to true in boolean context
// Falsy - Values that resolve to false in boolean context

// Falsy values - false, 0, empty string "", null, undefinded

// Truthy examples

console.log('Truthy Examples');

if ('dog') {
    console.log('1. non-empty string is true');
} else {
    console.log('false');
}

if ([]) {
    console.log('2. empty arrays are truthy');
} else {
    console.log('false');
}

if ({}) {
    console.log('3. empty objects are truthy');
} else {
    console.log('false');
}

if (48) {
    console.log('4. any number other than 0 is truthy');
} else {
    console.log('false');
}

// Item in array is found making the statement truthy
var products = [{}];
var product = products[0];

if (product) {
    console.log('5. product found');
} else {
    console.log(false);
}

console.log('\r');

console.log('#############################################');

console.log('\r');

// Falsy examples

console.log('Falsy Examples');

if (0) {
    console.log(true);
} else {
    console.log('1. 0 is falsy');
}

if ("") {
    console.log(true);
} else {
    console.log('2. empty string is falsy');
}

if (null) {
    console.log(true);
} else {
    console.log('3. null');
}

if (undefined) {
    console.log(true);
} else {
    console.log('4. undefined');
}

// Item in array is not found there for returning undefined
// Making the statement falsy
var products = [];
var product = products[0];

if (product) {
    console.log('true');
} else {
    console.log('5. product not found');
}