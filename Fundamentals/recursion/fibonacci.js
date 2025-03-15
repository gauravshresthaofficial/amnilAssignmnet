function fib(n) {
  // Base case
  // If number is 0 or 1, return it
  if (n === 0 || n === 1) {
    return n;
  }

  // Return sum of the previous two Fibonacci numbers
  return fib(n - 1) + fib(n - 2);
}

let result = fib(4);
console.log(result);
