// Use Object literals, template literals, and object destructing
// to console.log the new address city, state, and country

function addressMaker(address) {
    const newAddress = {
        city: address.city,
        state: address.state,
        country: 'United States'
    };
    
}

addressMaker({city: 'Austin', state: 'Texas'});

// Solution:

function addressMaker(address) {
    let {city, state} = address;

    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);

}

addressMaker({city: 'Austin', state: 'Texas'});