const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json();
        }
        
    }).then(data => data.find((country) => country.alpha2Code === countryCode).name );
};

