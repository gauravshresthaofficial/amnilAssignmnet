const showNotification = (message, isError = false, duration = 3000) => {
  const notification = document.querySelector("#notification");

  // Set the message and apply error styling if needed
  notification.textContent = message;
  notification.className = isError
    ? "notification error"
    : "notification success";

  // Show the notification
  notification.classList.add("visible");

  // Hide the notification after the specified duration
  setTimeout(() => {
    notification.classList.remove("visible");
  }, duration);
};

export { showNotification };
