// STEP 1: Define the function:
function grumpus() {
	console.log('ugh...you again...');
	console.log('FOR THE LAST TIME...');
	console.log('LEAVE ME ALONE!!!');
}
// STEP 2: Call the function:
grumpus();
grumpus();
grumpus();

for (let i = 0; i < 50; i++) {
	grumpus();
}

// Arrow function
const whatIsThis = () => {
    for (let i = 0; i <= 50; i++) {
      console.log('What is this??!!!!');
    }
  }
  
  whatIsThis();