// Checking movie ticket pricing based on age
let customerAge = 16;
if (customerAge < 12) {
  console.log("Child ticket price: 100");
} else if (customerAge >= 12 && customerAge < 18) {
  console.log("Teen ticket price: 200");
} else if (customerAge >= 18 && customerAge < 60) {
  console.log("Adult ticket price: 350");
} else {
  console.log("Senior citizen ticket price: 250");
}
