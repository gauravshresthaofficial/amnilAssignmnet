// User Input Validation

while (true) {
  const userInput = prompt(
    "Enter a number between 1 and 10 (or type 'exit' to quit):"
  );

  // Check if the user wants to exit
  if (userInput.toLowerCase() === "exit") {
    console.log("Exiting the program.");
    break;
  }

  // Convert the input to a number
  const number = Number(userInput);

  // Check if the number is valid
  if (number >= 1 && number <= 10) {
    console.log(`You entered a valid number: ${number}`);
    break;
  } else {
    console.log("Invalid input. Please try again.");
  }
}
