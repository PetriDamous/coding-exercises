const generateCarCard = (car) => {
  const template = document.querySelector("#car-card").innerHTML;
  return template.replace(/\${(.*?)}/g, (x, g) => car[g]);
};

export const appendCars = (cars) => {
  console.log(cars);
  document.getElementById("first-load").innerHTML = "";
  if (!cars) return;
  const cardHTML = cars.map((car) => generateCarCard(car)).join("");
  document.querySelector(".mdl-grid").innerHTML += cardHTML;
};
