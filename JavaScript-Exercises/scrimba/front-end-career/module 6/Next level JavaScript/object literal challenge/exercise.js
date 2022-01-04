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