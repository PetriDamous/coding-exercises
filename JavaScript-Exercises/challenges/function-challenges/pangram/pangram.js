// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

const isPangram = (str) => {
    let strArray = str.toLowerCase().split('').sort();
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let newArray = [];
  
    strArray.forEach((letter) => {
      if (!newArray.includes(letter)) {
        newArray.push(letter);
      }
    });
  
    return newArray.join('').trim() === alpha;
  
  }
  
  console.log(isPangram('The five boxing wizards jump quickly'));
  console.log(isPangram('The five boxing wizards jump quick'));