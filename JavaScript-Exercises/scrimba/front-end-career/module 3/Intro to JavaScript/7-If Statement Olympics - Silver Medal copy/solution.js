//Assignment - If Statement Olympics - Silver Medal

// Silver Medal

// 1 - Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.

// 2 -  Write an if statement that prints "yes" if 1 is less than or equal to 2 AND (&&) 2 is equal to 4

// My solutions:

// 1.
if (1 === '1') {
  console.log('strict');
} else if (1 == '1') {
  console.log('loose')
} else {
  console.log('not equal');
}

// 2. 
if (1 <+ 2 && 2 === 4) {
  console.log('yes');
} 

// Instructors solution:

if( 1 === "1" ) {
  console.log("Strict");
} else if( 1 == "1") {
  console.log("loose");
} else {
  console.log("not equal at all");
}

  // TRUE && FALSE
if( 1 <= 2 && 2 === 4) {
  console.log("yes");
} else {
  console.log("no");
}