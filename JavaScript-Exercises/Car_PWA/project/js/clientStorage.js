const carsInstace = localforage.createInstance({
  name: "cars",
});

let lastIdx = -1;

export const addCars = async (newCars) => {
  await carsInstace.setItems(newCars);
};

export const getCars = async () => {
  const keys = (await carsInstace.keys()).reverse();
  if (lastIdx >= keys.length) return;
  const results = await carsInstace.getItems(keys.splice(lastIdx + 1, 3));
  lastIdx += 3;
  return Object.values(results).reverse();
};

export const getLastItemId = async () => {
  const keys = (await carsInstace.keys()).reverse();

  return keys[lastIdx];
};
