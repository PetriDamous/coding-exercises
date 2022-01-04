// Undefined for variable

let name;

console.log(name);


// Undefined for function arguments

function addSomething(num) {
    console.log(num);
}

addSomething();

// Undefined as function return default value

function multiSomething(obj) {
    obj * 2
}

console.log(multiSomething(2));

// Null as assigned value

let age = 400;

age = null;

console.log(null);