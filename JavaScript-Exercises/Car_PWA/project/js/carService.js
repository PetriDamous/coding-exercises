import { API_URL_LATEST } from "./constants.js";
import { appendCars } from "./template.js";
import { addCars, getCars, getLastItemId } from "./clientStorage.js";

export const loadCars = async () => {
  document.getElementById("connection-status").innerText = await fetchPromise();
  const cars = await getCars();
  appendCars(cars);
};

const fetchPromise = () => {
  const promiseRequest = new Promise(async (resolve) => {
    try {
      await loadCarsRequest();
    } catch (err) {
      resolve("No connection, showing offline results");
    }
    resolve("This connection is OK, showing latest results");
  });

  const promiseHanging = new Promise((resolve) => {
    setTimeout(
      resolve,
      3000,
      "The connection is hanging, showing, offline results"
    );
  });

  return Promise.race([promiseRequest, promiseHanging]);
};

export const loadCarsRequest = async () => {
  const reqURL = `${API_URL_LATEST}?carId=${await getLastItemId()}`;
  const res = await fetch(reqURL);
  const data = await res.json();

  const { cars } = data;

  await addCars(cars);
};
