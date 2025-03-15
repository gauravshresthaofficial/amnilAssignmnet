// Function That Doesn't Return Anything
// they return undefined
function greet(name) {
    console.log("Hello " + name);
}

let returnValue = greet("Mia");
console.log(returnValue);

//  **************************************************************************************
// This program is equivalent to

// function greet(name) {
//   console.log("Hello " + name);
//   return;
// }

// let returnValue = greet("Mia");
// console.log(returnValue);
