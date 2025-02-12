// Filter the positive numbers
const numbers = [10, -5, 20, -3, 30, -8, 40];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    continue;
  }
  console.log(`Positive number: ${numbers[i]}`);
}
