import { API_URL_LATEST } from "./constants.js";
import { appendCars } from "./template.js";

export const loadCars = async () => {
  const res = await fetch(API_URL_LATEST);
  console.log(res);
  const data = await res.json();
  appendCars(data.cars);
};
