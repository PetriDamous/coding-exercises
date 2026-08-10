"use strict";

const carDealsCacheName = "carDealsCacheV1";
const carDealsCacheImagesName = "carDealsCacheImagesV1";
const carDealsCachePagesName = "carDealsCachePagesV1";
const carDealsCache = [
  carDealsCacheName,
  carDealsCacheImagesName,
  carDealsCachePagesName,
];

const carDealsCacheFiles = [
  "https://cdn.jsdelivr.net/npm/pwacompat@2.0.17/pwacompat.min.js",
  "https://cdn.jsdelivr.net/gh/bstavroulakis/progressive-web-apps/resources/localforage.js",
  "js/app.js",
  "js/carPageService.js",
  "js/carService.js",
  "js/clientStorage.js",
  "js/constants.js",
  "js/swRegister.js",
  "js/template.js",
  "/",
  "index.html",
  "style.css",
];

self.addEventListener("install", (e) => {
  console.log("From SW: Install Event");

  const preCache = async () => {
    // Creates cache
    const cache = await caches.open(carDealsCacheName);

    // Adds in array of all files we wish to cache
    return cache.addAll(carDealsCacheFiles);

    // The install event has a waitUntil method.
    // This method will tell the browser that the service
    // worker will not be considered installed until
    // the promise is resolved or rejected.
    e.waitUntil(preCache());
  };
});

self.addEventListener("activate", (e) => {
  console.log("From SW: Activate Event");

  //   The active event is a good time to clear the cache.
  const clearCache = async () => {
    // Gets keys from cache.
    const keys = await caches.keys();

    // Loop through keys.
    keys.forEach(async (key) => {
      if (carDealsCache.includes(key)) {
        return;
      }
      await caches.delete(key);
    });
  };
  e.waitUntil(clearCache());
});
