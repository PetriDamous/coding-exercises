import { API_URL_CAR } from "./constants.js";

export const loadCarPage = async (carId) => {
  const response = await fetch(`${API_URL_CAR}${carId}`);
  const responseTxt = await response.text();
  document.body.innerHTML += responseTxt;
};

export const preCacheDetailsPage = async (car) => {
  const carDetailUrl = `${API_URL_CAR}${car.value.details_id}`;

  // Opens cache. 1st time used creates cash entry carDealsCachePagesV1
  const cache = await window.caches.open("carDealsCachePagesV1");

  // Check to see if carDetailUrl is already in cache using .match method
  const res = await cache.match(carDetailUrl);

  // If carDetailUrl is not in cache add it to cache
  if (!res) cache.add(new Request(carDetailUrl));
};
