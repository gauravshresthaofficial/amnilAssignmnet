// Basic example
try {
  console.log("Start of try runs");

  console.log(`Total: ${sum}`); // Error:  Variable not defined

  console.log("End of try runs");
} catch (error) {
  console.log("An error caught");
} finally {
  // do in any case after try/catch
  console.log(
    "This is the finally block, and it runs regardless of whether there was an error or not."
  );
}
