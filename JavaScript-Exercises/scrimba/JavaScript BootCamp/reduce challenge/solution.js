// Challenge: 
// Use reduce() to sum the weights of all the cars
// Stretch goal: 
// Use reduce to sum the weights of only the electric cars 

const cars = [
    { name: "Toyota", isElectric: false, weight: 1320 },
    { name: "Ford", isElectric: false, weight: 1400 },
    { name: "Volkswagen", isElectric: false, weight: 1370 },
    { name: "Honda", isElectric: false, weight: 1375 },
    { name: "Tesla", isElectric: true, weight: 1750 },
    { name: "BMW", isElectric: true, weight: 1350 },  
  ];

// Solution 1

const totalWeights = cars.reduce((acc, car) => acc + car.weight, 0)

console.log(totalWeights);

// Solution 2

const electricWeights = cars.reduce((acc, car) => car.isElectric ? acc + car.weight : acc, 0);

console.log(electricWeights)