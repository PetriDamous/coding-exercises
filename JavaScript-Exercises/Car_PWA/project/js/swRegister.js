export default async () => {
  // Checks to see if browser supports serviceworks through navigator object
  if (!("serviceWorker" in navigator)) {
    return;
  }

  //   Registers service worker
  const swRegistration = await navigator.serviceWorker.register("sw.js", {
    scope: "",
  });

  console.log(swRegistration);
};
