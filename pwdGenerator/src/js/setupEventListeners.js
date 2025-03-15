import { copyToClipboard } from "./clipboard";
import { generatePassword } from "./generatePassword";
import { showNotification } from "./notification";
import { updateLength } from "./utils";

export const setupEventListeners = (domElements) => {
  // Check if all required DOM elements exist
  if (Object.values(domElements).some((element) => !element)) {
    showNotification("One or more DOM elements are missing!", true);
    console.error("One or more DOM elements are missing!");
    return;
  }

  // Generate password on checkbox change
  [
    domElements.uppercaseCheckbox,
    domElements.lowercaseCheckbox,
    domElements.numbersCheckbox,
    domElements.symbolsCheckbox,
  ].forEach((checkbox) => {
    checkbox.addEventListener("change", () => generatePassword(domElements));
  });

  // Update password length display
  domElements.lengthInput.addEventListener("input", () => {
    updateLength(domElements.lengthDisplay, domElements.lengthInput.value);
    generatePassword(domElements);
  });

  // Generate password on button click
  domElements.generateButton.addEventListener("click", () =>
    generatePassword(domElements)
  );

  // Copy password to clipboard
  domElements.copyButton.addEventListener("click", async () => {
    await copyToClipboard(domElements.passwordInput.value);
  });
};
