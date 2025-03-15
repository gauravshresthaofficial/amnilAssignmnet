function reverse(text) {
  // Base condition
  if (text === "") {
    return "";
  }

  // Recursive call
  return reverse(text.substring(1)) + text[0];
}

let result = reverse("Vibe");
console.log(result);
