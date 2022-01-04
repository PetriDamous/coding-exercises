// Challenge: 
// The JSON Placeholder API has /users endpoint, 
// just like the one we saw in the tutorial for /posts
// Get the user with ID 3 and log their name and company they work for.
// Handle errors if something does not quite work. 

// Here's the endpoint: https://jsonplaceholder.typicode.com/users/3

const API_URL = "https://jsonplaceholder.typicode.com";



fetch(`${API_URL}/users/3`)
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        return res.json();
    })
    .then(data => {
      const {name: userName, company: {name: companyName}} = data;

      console.log(userName);
      console.log(companyName);
    })
    .catch(e => console.log(e));

// console.log(user3);
