// Find the length of string in recursive way without using length function
function findLength(text) {
  if (text == "") {
    return 0;
  }

  return findLength(text.substring(1)) + 1;
}

let text = prompt();
let result = findLength(text);
console.log(result);
