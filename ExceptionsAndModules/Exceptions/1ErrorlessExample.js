// Basic example
try {
  // run this code
  console.log("Start of try runs");

  // No errors occur here
  let sum = 5 + 3;
  console.log(`Total: ${sum}`);

  console.log("End of try runs");
} catch (error) {
  // if an error happened, then jump here
  console.log("Catch is ignored, because there are no errors");
}
