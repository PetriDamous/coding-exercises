// new Date() will create new date object that will display the current time and date when the code is ran

const now = new Date();

// None string format of full date and time
console.log('now: ', now); // 2019-11-13T22:12:36.235Z

// String format of full date and time
console.log('toString(): ', now.toString()); // Wed Nov 13 2019 16:12:36 GMT-0600 (Central Standard Time)

// String version of just date
console.log('toDateString(): ', now.toDateString()); // Wed Nov 13 2019

// String version of just the time
console.log('toTimeString(): ' , now.toTimeString()); // 16:17:07 GMT-0600 (Central Standard Time)

// Get year
console.log(`Year: ${now.getFullYear()}`);

// Gets month
// Note: Month is zero index so Jan starts at 0 and Dec will be 11 instead of 12
console.log(`Month: ${now.getMonth()}`);

// Gets current date
console.log(`Date: ${now.getDate()}`);

// Gets current hour
console.log(`Hour: ${now.getHours()}`);

// Gets current minutes
console.log(`Minutes: ${now.getMinutes()}`);

// Gets current seconds
console.log(`Seconds: ${now.getSeconds()}`);



console.log('\n');

// We can also pass in date as a string to create a date at a specific time
const myDate = new Date('January 21 2001 6:25:01');

// This way is not very common though

// We instead use a number to represent a date

// We use what is called a Unix Epoch

// The Unix Epoch is a point in time

// Negative numbers represent a time before the Unix Epoch

// Positive numbers represent a time after the Unix Epoch

// Unix Epoch - January 1st 1970 00:00:00

// If we want to move forward in time we would represent it in milliseconds and it would be positive

// Since we are working with milliseconds we can use the getTime method to get a time stamp to work with

const newDate = new Date();

console.log('timeStamp: ', newDate.getTime());

// This will easily get us the milliseconds we need

// Now we can store the time stamp in a varialbe and pass that in to any of the time methods

const timeStamp = newDate.getTime();

const realDate = new Date(timeStamp);

console.log('Date from timestamp: ', realDate.getDate());




