// Request -  What do we want to do
// Response - What was actually done

// Creates new instance of request
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', (e) => {

    // readyState tells us the state of the request
    // 4 means done 
    // We will be using 4 most of the time because we are more interested in the data when the request is done

    if (e.target.readyState === 4) {
        // responseText is a read-only XMLHttpRequest property responseText returns the text received from a server following a request being sent.
        const data = JSON.parse(e.target.responseText);
        console.log(data);
    }
});

// Initializes a request
// GET is a request method. In this case we want to get info so we use GET
// Second argumentrepresenting the URL to send the request to
request.open('GET', 'http://puzzle.mead.io/puzzle');

// Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent.
request.send();