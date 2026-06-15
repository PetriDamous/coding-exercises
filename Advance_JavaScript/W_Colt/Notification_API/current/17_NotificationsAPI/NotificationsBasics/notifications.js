async function showNotification() {
  const permission = await Notification.requestPermission();
  console.log(permission);
  if (permission === "granted") {
    const notification = new Notification("My First Notification", {
      body: "I like turtles",
      icon: "blue.png",
      data: {
        url: "blah.com",
        person: "Chirs Redfield",
      },
    });

    notification.addEventListener("click", () => {
      console.log("clicked on notification");
      window.focus();
      console.log(notification);
      notification.close();
    });

    notification.addEventListener("close", () => {
      console.log("closed notification");
    });
  }
}

document.getElementById("btn").addEventListener("click", showNotification);
