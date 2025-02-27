// Asynchronous script
console.log("Start");

// Attempt to access the element
const element = document.getElementById("text");
if (element) {
  console.log("Element found:", element.innerText);
} else {
  console.log("Element not found yet.");
}

console.log("End");
