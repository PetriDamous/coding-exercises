// Primitive values: string, number, boolean, null, undefined

// Prototype chain:
// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myStr --> String.prototype --> Object.prototype --> null
// Number: myNum --> Number.prototype --> Object.prototype --> null
// Boolean: myBool --> Boolean.prototype --> Object.prototype --> null

// Note: Array is a type of object

const team = ['chris', 'jill']

// We can view the prototype chain in the browser console
console.log(team);

// We can also create arrays using the constructor function
// We will probably never use this but it is nice to know

const team2 = new Array(['leon', 'claire'])

console.log(team2);

// Note: Functions are a type of object

const getScore = () => 300;

// Note: When () is not used the function is not called and we can view it
console.log(getScore)

// Primitive values

// null and undefined do not have properties

// string, number, boolean on the other had do

// Even though string, number, boolean are primitives they have access to properties via an object wrapper when a property is used on them

const str1 = 'gundam00';

// Will just print out 'gundam00'
console.log(str1)

// But if we use the String constructor we can view properties and the prototype chain

const str2 = new String('akame ga kill')

console.log(str2)