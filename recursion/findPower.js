function findPower(base, power) {
  if (power == 0) {
    return 1;
  }

  return findPower(base, power - 1) * base;
}

// Take user input for base and power
let base = parseInt(2);
let power = parseInt(3);

// Call the findPower() function
let result = findPower(base, power);

// Print result
console.log(result);
