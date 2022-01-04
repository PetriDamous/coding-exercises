let name = ' Chris Redfield ';

// Length property
console.log(name.length); // 16

// Convert to upper case
console.log(name.toUpperCase()); // CHRIS REDFIELD

// Convert to lower case
console.log(name.toLowerCase()); // chris redfield

// Sub string included in string
let password = 'abc123password089'
console.log(password.includes('password')); // true

let newPassword = 'abc123newPassword089';
console.log(newPassword.includes('fan')); // false

// Trim removes white space at begining and end of string
console.log(name.trim()); // Chris Redfield (takes out spaces in front and back)
console.log(name.trim().length); // 14

console.log('\n');

// Challenge area

// Create a function called isValidPassword

// length is more than 8 - and it doesn't contain the word password

function isValidPassword (password) {
    return password.length > 8 && !password.includes('password');    
}

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('asdfp!@#$%^&*'));
console.log(isValidPassword('asdfp!@####$password'));

