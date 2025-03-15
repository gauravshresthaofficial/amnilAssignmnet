import { showNotification } from "./helper";
import { createPassword } from "./password";

// setupEventListeners.js
export const setupEventListeners = () => {
  const passwordInput = document.querySelector("#password");
  const generateButton = document.querySelector("#generate");
  const copyButton = document.querySelector("#copy");
  const lengthInput = document.querySelector("#length");
  const uppercaseCheckbox = document.querySelector("#uppercase");
  const lowercaseCheckbox = document.querySelector("#lowercase");
  const numbersCheckbox = document.querySelector("#numbers");
  const symbolsCheckbox = document.querySelector("#symbols");
  const lengthDisplay = document.querySelector("#lengthDisplay");

  if (
    !passwordInput ||
    !generateButton ||
    !copyButton ||
    !lengthInput ||
    !uppercaseCheckbox ||
    !lowercaseCheckbox ||
    !numbersCheckbox ||
    !symbolsCheckbox ||
    !lengthDisplay
  ) {
    showNotification("One or more DOM elements are missing!", true);
    console.error("One or more DOM elements are missing!");
    return;
  }

  //Display the current length value
  lengthDisplay.textContent = lengthInput.value;

  // Generate password function
  const generatePassword = () => {
    const len = lengthInput.value;
    const hasUpper = uppercaseCheckbox.checked;
    const hasLower = lowercaseCheckbox.checked;
    const hasNumbers = numbersCheckbox.checked;
    const hasSymbols = symbolsCheckbox.checked;

    try {
      passwordInput.value = createPassword(
        len,
        hasUpper,
        hasLower,
        hasNumbers,
        hasSymbols
      );
    } catch (error) {
      showNotification(error.message, true);
    }
  };

  // Update password length display
  lengthInput.addEventListener("input", () => {
    const value = lengthInput.value;
    lengthDisplay.textContent = value;
    generatePassword();
  });

  // Generate password on checkbox change
  [
    uppercaseCheckbox,
    lowercaseCheckbox,
    numbersCheckbox,
    symbolsCheckbox,
  ].forEach((checkbox) => {
    checkbox.addEventListener("change", generatePassword);
  });

  // Generate password on button click
  generateButton.addEventListener("click", generatePassword);

  // Copy password to clipboard
  copyButton.addEventListener("click", async () => {
    passwordInput.select();
    await navigator.clipboard.writeText(passwordInput.value);
    showNotification("Password copied to clipboard");
  });

  // Generate password on page load
  generatePassword();
};
