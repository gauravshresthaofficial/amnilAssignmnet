// Basic exampe
try {
  console.log("Start of try runs");

  console.log(sum); // Error:  Variable not defined

  console.log("End of try runs");
} catch (error) {
  console.log("An error caught");
  console.log("Error Name:", error.name);
  console.log("Error Message:", error.message);
}
