 const feline = {
  legs: 4,
  family: 'Felidae'
};

const canine = {
  family: 'Caninae',
  furry: true,
  legs: 4
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true
}
//{family: "Caninae", furry: true, legs: 4, isPet: true, adorable: true}

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: 'unpredictable'
}
//{legs: 4, family: "Felidae", isGrumpy: true, personality: "unpredictable"}

const catDog = {
  ...canine,
  ...feline
}
//{family: "Felidae", furry: true, legs: 4}

//Order matters! Legs will be 3 here, because we set it AFTER spreading canine.
const tripod = {
  ...canine,
  legs: 3,
}
//{family: "Caninae", furry: true, legs: 3}

const catDogClone = {
  ...catDog
}

const random = [...'hello', {
  ...catDog
}]

// We can also spread objects into objects similar to how we can spread arrays
// into arrays.

// Same concept applies as spreading arrays, the cloned object is unique but the
// objects being spread into the cloned object are referenced

// You cannot spread objects into arrays, but you can spread arrays into object.
// The key will be the index and the key will be the array item.

// You can also spread strings into objects. Key will be the index and value will
// be the sub character.

// Both are not common things to use the spread for but it can be done.

