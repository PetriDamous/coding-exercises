// 1. Make a new request for all countries
// 2. Parse the responseText to get back the array of objects
// 3. Find your country object by it's contry code (alpha2Code property)
// 4. Print the full country name (name property)
//  ISO 3166-2: 3166-2:US

const myCountry = document.getElementById('my-country');

const countyCode = 'MX';

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        const country = data.find((country) => country.alpha2Code === countyCode);
        myCountry.textContent = country.name;

    } else if (e.target.readyState === 4) {
        myCountry.textContent = `Oops there was an error. Status: ${e.target.status}.`
    }
});

request.open('GET', 'http://restcountries.eu/rest/v2/all');

request.send();


