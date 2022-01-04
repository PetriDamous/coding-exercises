// Assignment - Arrays and Loops Part 2

// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

// Optional bonus challenges for this problem
// #1 - Log to the console a personalized message like:
// Mike is not old enough to see Mad Max

// #2 - Check to see if the movie goer is a male or female for an even more personalized message.
// Mike is not old enough to see Mad Max Fury Road, don't let HIM in.
// or
// Madeline is old enough. SHE'S good to see Mad Max Fury Road.

const peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ];

// My solution

const checkAge = (people) => {
    let genderChk = '';
  
    for (person of people) {
      let {name, age, gender} = person;    
  
      if (age >= 18) {
        genderChk = gender === 'male' ? "HE's" : "SHE's";
        console.log(`${name} is old enough. ${genderChk} good to see Mad Max Fury Road.`);
      } else {
        genderChk = gender === 'male' ? "HIM" : "HER";
        console.log(`${name} is not old enough to see Mad Max Fury Road, don't let ${genderChk} in.`)
      }   
  
    }
  }
  
  checkAge(peopleWhoWantToSeeMadMaxFuryRoad);

// Telmo solution

for( let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ) {
    if( peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        let userGender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ? "HE'S" : "SHE'S"
        
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. " + userGender + " good to see Mad Max Fury Road.")
    } else {
       let userGender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ? "HIM" : "HER"
       
       console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let "+ userGender + " in.")
    }
}

