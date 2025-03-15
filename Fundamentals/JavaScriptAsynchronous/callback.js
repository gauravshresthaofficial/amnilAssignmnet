// A callback is a function passed as an argument to another function, which is called once the operation is done.

function validateForm(data, callback) {
  console.log("Validating form...");
  setTimeout(() => {
    const isValid = data.username && data.password; // Simple validation
    callback(isValid);
  }, 2000);
}

validateForm({ username: "user123", password: "pass123" }, (isValid) => {
  if (isValid) {
    console.log("Form submitted successfully!");
  } else {
    console.log("Form validation failed!");
  }
});
