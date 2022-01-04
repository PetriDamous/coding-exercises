//Assignment - If Statement Olympics - Bronze Medal

//1 - Using the below object, write an if statement that prints <theNameOfThePersonInObject> 
// is allowed to go to the movie if they are old enough (18 or older), and the opposite if they are not older than 18.

//2 - Using that same object, only allow them into the movie if their name starts with "B"

//3 - Using that same object, only allow them into the movie if their name starts with "B" and they are older than 18.


var person = {
    name: "Bobby",
    age: 12
}

// My solutions:

// 1.
if (person.age <= 18) {
  console.log(`${person.name} is allowed to go to the movies`);
} else {
  console.log(`${person.name} is not allowed to go to the movies`);
}


// 2.
if (person.name[0] === "B") {
  console.log(`${person.name} can go in`);
}

// 3. 
if (person.age <= 18 && person.name[0] === 'B') {
  console.log(`${person.name} can go in`);
}


// Instructors solutions:


if( person.age >= 18 ) {
    console.log( person.name + " is allowed to go to the movie");
} else {
    console.log( person.name + " is not allowed to go to the movie");
}

console.log( person.name.charAt(0) );

if( person.name.charAt(0) === "B" && person.age >=18 ) {
    console.log( person.name + " is allowed to go to the movie");
} else {
    console.log( person.name + " is not allowed to go to the movie");
}