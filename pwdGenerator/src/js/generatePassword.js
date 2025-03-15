import { showNotification } from "./notification";
import { createPassword } from "./password";
import {
  evaluatePasswordStrength,
  updateStrengthIndicator,
} from "./passwordStrength";

export const generatePassword = (domElements) => {
  const {
    passwordInput,
    lengthInput,
    uppercaseCheckbox,
    lowercaseCheckbox,
    numbersCheckbox,
    symbolsCheckbox,
  } = domElements;

  // Get user inputs
  const len = lengthInput.value;
  const selectedTypes = [
    { type: "upper", enabled: uppercaseCheckbox.checked },
    { type: "lower", enabled: lowercaseCheckbox.checked },
    { type: "num", enabled: numbersCheckbox.checked },
    { type: "sym", enabled: symbolsCheckbox.checked },
  ].filter((type) => type.enabled);

  // Enable length input (if previously disabled)
  lengthInput.disabled = false;

  // Throw an error if no character types are selected
  if (selectedTypes.length === 0) {
    showNotification("Please select at least one option", true);
    lengthInput.disabled = true;
    return;
  }

  // Generate the password
  const password = createPassword(len, selectedTypes);
  passwordInput.value = password;

  // Evaluate and update password strength
  const strength = evaluatePasswordStrength(password);
  updateStrengthIndicator(strength);
};
