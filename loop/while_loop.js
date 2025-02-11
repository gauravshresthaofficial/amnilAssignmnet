// The number we want to calculate the factorial for
let number = 5;

let factorial = 1;

// While loop to calculate the factorial
while (number > 0) {
  factorial *= number;
  number--;
}

// Print the result
console.log("Factorial:", factorial);
