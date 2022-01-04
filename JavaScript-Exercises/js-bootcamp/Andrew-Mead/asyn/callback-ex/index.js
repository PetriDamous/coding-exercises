// 1. Create a new function for getting country details
// 2. Call it with two arguments: country code, the callback function
// 3. Make the HTTP request and call the callback with country information
// 4. Use the callback to print the country name

const myCountry = document.getElementById('my-country');

const countryCode = 'US';

const callBack = (error, data) => {
    
    if (error) {
        myCountry.textContent = error;

    } else {        
        
        
        myCountry.textContent = data;
    }
}





getCountry(countryCode, callBack);



