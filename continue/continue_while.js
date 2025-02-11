// skip processing if the user enters an empty string
let userInput = "";
let processedInputs = [];

while (true) {
  userInput = prompt("Enter a word (or type 'quit' to exit):");

  // Exit the loop if the user types 'quit'
  if (userInput.toLowerCase() === "quit") {
    console.log("Exiting the program.");
    break;
  }

  // Skip empty input or input starting with '#'
  if (userInput.trim() === "") {
    console.log("Skipping invalid input.");
    continue;
  }

  // Process valid input
  processedInputs.push(userInput);
  console.log(`Processed input: ${userInput}`);
}

console.log("All processed inputs:", processedInputs);
