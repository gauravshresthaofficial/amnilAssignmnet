// Basic example
try {
  console.log("Start of try runs");

  console.log(`Total: ${sum}`); // Error:  Variable not defined

  console.log("End of try runs");
} catch (error) {
  console.log("An error caught");
}

// tryCatch works synchronously
try {
  console.log("Start of try runs");

  setTimeout(() => {
    console.log("Total:", sum); // Error:  Variable not defined
  }, 1000);

  console.log("End of try runs");
} catch (error) {
  console.log("An error caught"); // This won't catch the error from setTimeout
}
