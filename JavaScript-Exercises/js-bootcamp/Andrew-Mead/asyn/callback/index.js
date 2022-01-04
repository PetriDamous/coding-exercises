// Call Back funtions for http requests
// Currently if we make a http request we have to run our code inside of the request event listner
// Ideally we would want to store our data from the request and use it any where in our code
// Adrew explains in detail in video: 107 Call Back Abstaction
// An issue I ran into was that the file would run before the request could finish so we never had any data to work with
// Call back functions fixed the problem

// Note: If you have nested functions, and you create a return statement on the child function then you will get undefined. 
// Always use returns on the parent function

const myCountry = document.getElementById('my-country');

const countryCode = 'US';


// Call Back function we will be using
// We usually pass in an error and data we want to work with
// Only needs one of the two arguments
const callBack = (error, data) => {
    
    if (error) {
        myCountry.textContent = error;

    } else {
        
        // Runs our code with the returned data from the getCountry function
        const countryName = data.find((country) => country.alpha2Code === countryCode).name;
        myCountry.textContent = countryName;
    }
}

// callBack is passed in as an argument
const getCountry = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);

            // callBack will run once request is complete and conditions are met
            // In this case we will return the data
            callback(undefined, data);
    
        } else if (e.target.readyState === 4) {
            
            // callBack will run once request is complete and conditions are met
            // In this case we will return our error
            callback(`Oops there was an error. Status: ${e.target.status}.`, undefined);
        }
    });

    request.open('GET', 'http://restcountries.eu/rest/v2/all');

    request.send();
}

// Our getCountry function takes in callBack function as an argument
getCountry(callBack);

// In summary we can use a call back function when we want to execute code after an action has been preformed
// When we use event listners we are using a call back function to execute our code after an event has been fired

