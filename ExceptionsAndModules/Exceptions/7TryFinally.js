function sum(a, b) {
  try {
    return a + b;
  } finally {
    // finally is executed just before the control returns to the outer code.
    console.log("finally");
  }
}

let total = sum(3, 5);
console.log(`The sum is: ${total}`);
