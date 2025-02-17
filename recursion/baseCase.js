function printNumbers(n) {

    // Base case with return value
    if (n === 3) {
        return "Done";
    }

    console.log(n);

    return printNumbers(n + 1);
}

let output = printNumbers(1);
console.log(output);