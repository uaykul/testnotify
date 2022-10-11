self.addEventListener("push", (e) => {
  console.log("e :>> ", e.data.text());
  const config = {
    body: e.data.text() || "New Version Avaible!!",
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "3",
    },
    icon: "images/logo.png",
    vibrate: [100, 50, 100],
    actions: [
      {
        action: "explore",
        title: "Update",
        icon: "images/logo.png"
      },
      {
        action: "close",
        title: "Close",
        // icon:
      },
    ],
  };
  e.waitUntil(
    self.registration.showNotification("New Version Avaible!!", config)
  );
});
