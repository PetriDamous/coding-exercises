/*
// A reference to an object points to the same object in memory
// In the example below myAccount is a pointer to it's object
// account in the function is a pointer to the same object that myAccount is pointing to

let myAccount = {
    name: 'Chris Redfield',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses += amount;
    console.log(account); // Creates Object reference to myAccount object
}

addExpense(myAccount, 2.50);

console.log(myAccount);
*/

// When changing an object reference to a new object the object reference relationship is broken
// In the examples below account and monkey become object references, refering to myAccount and dog
// If we change properties of account and monkey they will change the propties of myAccount and dog (Currently they are still pointing to the same object)
// When we break the object reference relationship by setting account and monkey to a new object we are referncing a new and different object in memory
// Note: The varibles used to name objects are just pointers that reference an object. The {} are the real objects

// Object reference through function

let myAccount = {
    name: 'Chris Redfield',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account = {}
    account.name = 'Barry Burton';
    console.log('account: ',account); // Creates Object reference to myAccount object
}

addExpense(myAccount, 2.50);

console.log('myAccount: ',myAccount);

console.log('\n')

// Object reference through variable change

let dog = {
    name: 'Puppy Power',
    expenses: 0,
    income: 0
}

monkey = dog;

console.log('Dog: ',dog);
console.log('Monkey1: ',monkey);

monkey = {};

monkey.name = 'Diddy Kong';

console.log('Monkey2: ',monkey);

