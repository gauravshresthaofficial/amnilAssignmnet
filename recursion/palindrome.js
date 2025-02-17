// a program to check if a string is a palindrome or not.

function checkPalindrome(text) {
  // If the string is empty or contains a single character,
  // the string is a palindrome
  if (text.length === 0 || text.length === 1) {
    return true;
  }

  // Check if the first and last characters are the same
  if (text[0] === text[text.length - 1]) {
    // Recursive call
    return checkPalindrome(text.substring(1, text.length - 1));
  } else {
    return false;
  }
}

let result = checkPalindrome("level");
console.log(result ? "Palindrome" : "Not Palindrome");
