const getCountry = (countryCode, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            const countryName = data.find((country) => country.alpha2Code === countryCode).name;

            callback(undefined, countryName);
    
        } else if (e.target.readyState === 4) {
            

            callback(`Oops there was an error. Status: ${e.target.status}.`, undefined);
        }
    });

    request.open('GET', 'http://restcountries.eu/rest/v2/all');

    request.send();
}