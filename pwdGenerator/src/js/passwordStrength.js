// Function to evaluate the strength of a given password
const evaluatePasswordStrength = (password) => {
  // Calculate password length
  const length = password.length;

  // Check for the presence of different character types
  const hasUpper = /[A-Z]/.test(password); // Uppercase letters (A-Z)
  const hasLower = /[a-z]/.test(password); // Lowercase letters (a-z)
  const hasNumber = /[0-9]/.test(password); // Numbers (0-9)
  const hasSymbol = /[^A-Za-z0-9]/.test(password); // Special symbols (e.g., !, @, #)

  let strength = 0;

  // Length check - Add points based on password length
  if (length >= 8) strength += 1; // +1 point for 8 or more characters
  if (length >= 12) strength += 1; // +1 additional point for 12 or more characters

  // Character diversity check - Add points for each character type present
  if (hasUpper) strength += 1; // +1 point for uppercase letters
  if (hasLower) strength += 1; // +1 point for lowercase letters
  if (hasNumber) strength += 1; // +1 point for numbers
  if (hasSymbol) strength += 1; // +1 point for symbols

  // Return the total strength score
  return strength;
};

// Function to update the UI indicator based on the password strength score
const updateStrengthIndicator = (strength) => {
  // Get UI elements for displaying the strength text and progress bar
  const strengthText = document.querySelector("#strength-text");
  const strengthBarFill = document.querySelector("#strength-bar-fill");

  // Initialize default values for weak passwords
  let strengthLevel = "Weak";
  let barColor = "red";
  let barWidth = "25%";

  // Determine strength level, color, and progress bar width based on the score
  if (strength >= 6) {
    strengthLevel = "Very Strong";
    barColor = "green";
    barWidth = "100%";
  } else if (strength >= 4) {
    strengthLevel = "Strong";
    barColor = "orange";
    barWidth = "75%";
  } else if (strength >= 2) {
    strengthLevel = "Medium";
    barColor = "yellow";
    barWidth = "50%";
  }

  // Update the UI with the calculated strength level and progress
  strengthText.textContent = strengthLevel;
  strengthBarFill.style.width = barWidth;
  strengthBarFill.style.backgroundColor = barColor;
};

// Export functions for external use
export { evaluatePasswordStrength, updateStrengthIndicator };
