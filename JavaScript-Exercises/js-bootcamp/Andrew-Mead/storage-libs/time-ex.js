// 1. Create two dates in the past (use string for Date)
// 2. Get timestamps for both
// 3. Figure out wich is first and print its time (use toString)

const date1 = new Date('December 17, 2012 03:24:00');

const date2 = new Date('April 17, 2990 03:24:00');

const timeStamp1 = date1.getTime();

const timeStamp2 = date2.getTime();



timeStamp1 < timeStamp2 ? console.log(date1.toString()) : console.log(date2.toString());