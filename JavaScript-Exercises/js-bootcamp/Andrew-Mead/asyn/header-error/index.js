// https://httpstatuses.com/
// HTTP response status codes indicate whether a specific HTTP request has been successfully completed.

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', (e) => {

    // Status code 200 means the request was succeful
    if (e.target.readyState === 4 && e.target.status === 200) {        
        const data = JSON.parse(e.target.responseText);
        console.log(data);
        
      // Away to handle errors.
      // We will still check to see if the request is complete to decide what to do with the error 
    } else if (e.target.readyState === 4) {
        console.log(`We have an error. Status: ${e.target.status}`)
    }
});

// Forcing a bad request for this demo
request.open('GET', 'http://puzzle.mead.io/puzzl');

request.send();