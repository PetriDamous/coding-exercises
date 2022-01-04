// When using const to point to an object, you cannot change the pointer to another object

const dog = {
    name: 'Fido'
}

dog = {} // Throws error

console.log(dog); // Throws error

// You can however change the property of an object that is using const as a pointer

const cat = {
    name: 'Felix'
}

cat.name = 'Danny the cat';

console.log(cat.name); // 'Danny the cat'