let restaurant = {
    name: 'ABS',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let setsLeft = this.guestCapacity - this.guestCount;
        return partySize <= setsLeft;
    },
    seatParty: function (partySize) {
        this.guestCount += partySize;
    },
    removeParty: function (partySize) {
        this.guestCount -= partySize;
    }
}

/*

Create the following methods:

1. seatParty - Will take in the size of the party to be seated
2. removeParty - Will remove the size of the party that is seated

*/

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4)); // should return false
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4)); // should return true
