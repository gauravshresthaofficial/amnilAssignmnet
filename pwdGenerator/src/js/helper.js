// Random character generators
const getRandomLower = () =>
  String.fromCharCode(Math.floor(Math.random() * 26) + 97); // a-z

const getRandomUpper = () =>
  String.fromCharCode(Math.floor(Math.random() * 26) + 65); // A-Z

const getRandomNumber = () =>
  String.fromCharCode(Math.floor(Math.random() * 10) + 48); // 0-9

const getRandomSymbol = () => {
  const symbols = "!@#$%^&*(){}[]=<>/,.-_";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

// Notification handler
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

export {
  getRandomLower,
  getRandomUpper,
  getRandomNumber,
  getRandomSymbol,
  showNotification,
};
