// product --> Object.prototype --> null 

const product = {
    name: 'Artonolico'
}

// hasOwnProperty
// Checks to see if an object contains that property

console.log(product.hasOwnProperty('name')); // true

console.log(product.hasOwnProperty('dog')); // false

// hasOwnProperty is inherited from the Object.prototype

// We will get false
console.log(product.hasOwnProperty('hasOwnProperty')); // false

// We get false because our product object is inheriting hasOwnProperty from Object.prototype
// This means we have access to hasOwnProperty through the prototype

const gundam = {
    weapon: 'Beam rifle',
    hasOwnProperty() {
        return 'Beam saber'
    }
}

// We can over ride the prototyple inheritance by adding our own hasOwnProperty directly on the object
console.log(gundam.hasOwnProperty()) // Beam saber

// Instead of going down the prototype chain we use the property that is directly on the object

// Every time we create an object we are creating a new instance of the Object constructor

// We can also view the prototype chain in the web browser
console.log(product);

// We can view the prototype chain by:
// Typing product._proto_ and product._proto_.proto_

// Discribes this: product --> Object.prototype --> null 

// The following is a bad idea and we would never use any of the examples below
// This is for learning purposes only

// We can override the default prototype methods 

Object.prototype.hasOwnProperty = () => 'This is a new function';

console.log(product.hasOwnProperty()); // This is a new function

// We can also add our own methods to the built in prototypes

Object.prototype.weapon = () => 'Beam saber';

console.log(product.weapon()); // Beam saber

// We we create objects in JavaScript we do not have to use the new keyword like we did when we made an instance for our own objects
// This is called literal syntax.  Basically it is a series of characters that are used to tell the language to create an object like we did with the keyword new but behind the sense

// Here is another way to create an object
// Same result as using literal syntax like in the above examples
const newGundam = new Object();

newGundam.weapon = 'Funnels'

console.log(newGundam.weapon) // Funnels

// If we pass in an object as an argument the object will be created like in the above examples

const zakuII = new Object({
    weapon: 'heat hawk'
})

console.log(zakuII.weapon) // heat hawk

// We would never use these examples because we have access to the literal syntax 