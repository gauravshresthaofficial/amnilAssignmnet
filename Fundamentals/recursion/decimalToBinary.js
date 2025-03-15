function findBinary(decimal) {
  if (decimal === 0) {
    return "";
  }

  // Recursively divide decimal by 2
  // and concatenate remainder to the result
  return findBinary(Math.floor(decimal / 2)) + (decimal % 2).toString();
}

let binaryRepresentation = findBinary(8);
console.log(binaryRepresentation);