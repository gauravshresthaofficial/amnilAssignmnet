const evaluatePasswordStrength = (password) => {
  const length = password.length;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);

  let strength = 0;

  // Length check
  if (length >= 8) strength += 1;
  if (length >= 12) strength += 1;

  // Character diversity check
  if (hasUpper) strength += 1;
  if (hasLower) strength += 1;
  if (hasNumber) strength += 1;
  if (hasSymbol) strength += 1;

  return strength;
};

const updateStrengthIndicator = (strength) => {
  const strengthText = document.querySelector("#strength-text");
  const strengthBarFill = document.querySelector("#strength-bar-fill");

  let strengthLevel = "Weak";
  let barColor = "red";
  let barWidth = "25%";

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

  strengthText.textContent = strengthLevel;
  strengthBarFill.style.width = barWidth;
  strengthBarFill.style.backgroundColor = barColor;
};

export { evaluatePasswordStrength, updateStrengthIndicator };
