// functions that call themselves are called recursive functions,
// and this programming technique is known as recursion.
function printNumbers(n) {
  console.log(n);

  // Argument is decreased by 1 in each recursive call
  if (n > 0) {
    printNumbers(n - 1);
  }
}

printNumbers(100);
