// Getters are methods that return a value
// Setters are methods that take in a value (they take in arguments)

// They both come in handy for setting values and returning values on objects

// Setters can be used to take in data and sanitize the data or validate the data
// Getters return the value from Setters

const data = {
    // Stores our locations
    locations: [],

    // Getter
    get location() {
        return this.locations;
    },

    // Setter
    set location(value) {
        // We sanitize our data
        // and we store it to a property of our data object        
        this._location = value.trim();

        // pushes value set on property to our array
        this.locations.push(this._location);
    }
}

// Calls on setter to set value of location
data.location = '  San Antonio      ';
data.location = 'Raccon City      ';

// Calls on getter to return value of location
console.log(data.location);