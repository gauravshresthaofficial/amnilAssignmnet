// Searching for a Specific Item in a List
const products = [
  { id: 1, name: "Laptop", price: 120000 },
  { id: 2, name: "Smartphone", price: 38000 },
  { id: 3, name: "Tablet", price: 60000 },
  { id: 4, name: "Headphones", price: 1500 },
  { id: 5, name: "Keyboard", price: 1000 },
];

const searchId = 3;
let foundProduct = null;

for (let i = 0; i < products.length; i++) {
  if (products[i].id === searchId) {
    foundProduct = products[i];
    break;
  }
}

if (foundProduct) {
  console.log("Product found:", foundProduct);
} else {
  console.log("Product not found.");
}
