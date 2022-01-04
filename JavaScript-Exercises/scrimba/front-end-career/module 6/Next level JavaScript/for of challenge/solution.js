// Challenge - For Of Loop

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
]

// My solution:

for (const student of students) {
    const {name, city} = student;
    console.log(`${name} lives in ${city}`);
}

// Telmo solution:
for( const student of students ) {
    console.log( student.name + " lives in " + student.city );
}