// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

const getCard = () => {

    let value = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    let suit = ['clubs', 'spades', 'hearts', 'diamonds'];

    let cardValue = value[Math.floor(Math.random() * value.length)];
    let cardSuit = suit[Math.floor(Math.random() * suit.length)];

    return { value: cardValue, suit: cardSuit };
}
  
getCard();