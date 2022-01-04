// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

const user = {
    username: 'Chris',
    password: 'wesker!!!'
  }
  
  // 2. Create an array which contains the object you have made above and name the array "database".
  
  const database = [user]
  
  // 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
  
  const newsfeed = [
    {
      username: 'Chris',
      timeline: '1'
    },
  
    {
      username: 'Jill',
      timeline: '2'
    },
  
    {
      username: 'Barry',
      timeline: '3'
    }
  ]
  
  // Locates Jill from the newsfeed object
  console.log(newsfeed[1].username);
  
  // Locates Chris from database array
  console.log(database[0].username);
