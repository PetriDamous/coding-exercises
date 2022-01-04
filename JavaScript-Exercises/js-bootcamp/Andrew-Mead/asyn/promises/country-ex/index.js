// Convert to promise

const myCountry = document.getElementById('my-country');

const countryCode = 'US';

getCountry(countryCode).then((data) => {
    myCountry.textContent = data;
}, (err) => {
    myCountry.textContent = err;
});





