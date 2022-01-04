// 1. Create a new moment
// 2. Set the month, day, and year to your birthday
// 3. Use format to print it in the following way: Jan 6, 1991

const date = moment().set({ 'year': 1983, 'month': 10, 'date': 13 }).format('MMM DD, YYYY');

console.log(date);