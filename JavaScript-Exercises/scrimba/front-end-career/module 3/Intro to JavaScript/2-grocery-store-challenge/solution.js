//Assignment - Grocery Store JS
// Write a program that has a shopper object. Include at least one property with each of the following data types as values to the properties:

// String
// Number
// Boolean
// Function (called a "method" when it's inside an object like this. Check out an example for help writing your own)
// In addition, you should add a groceryCart property to your object, which should be an Array of items that can commonly be found in a grocery cart.

// My solution:

var shopper = {
    //... your properties will go here
 
    name: 'Chris',
    age: 47,
    isHappy: false,
    punch: function () {console.log('Bolder punch')},
   groceryCart: ['hand guns', 'rocket launcher', 'sub machine gun']
}



// Instructors solution:

var shopper = {
    name: "John",
    wallet: 100,
    hasMoney: true,
    buy: function() {
        return this.name + " is buying something";
    },
    groceryCart: ["milk", "eggs", "juice"]
 }

//  Note: this keyword is used to refer to the object
// this.name is like shopper.name
