// Convert to use fetch api

const myCountry = document.getElementById('my-country');

const countryCode = 'US';

getCountry(countryCode).then((data) => {
    myCountry.textContent = data;
}).catch(e => myCountry.textContent = `Oops there was an error. Error: ${e.message}`);


