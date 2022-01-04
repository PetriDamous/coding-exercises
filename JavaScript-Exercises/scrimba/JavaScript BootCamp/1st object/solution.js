// Challenge: 
// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
// 2. Create an object - favouritePlaces - and populate it with your variables from task 1
// 3. If you're not already using the object property shorthand, refactor your code to do so
// 4. Create a method on the object - greeting() -  that logs out a message to the console
// 5. Invoke the greeting() method and also log out your favourite restaurant to the console

// 1. 
const bar = "Sir drinks o lot";
const cafe = "Rabbit House";
const restaurant = "Chuckie Cheese";

// 2. 
const favouritePlaces = {
  bar,
  cafe,
  restaurant,
  greeting() {
    console.log(`My fav resturant in the whole world is ${restaurant}`)
  }
}

favouritePlaces.greeting();