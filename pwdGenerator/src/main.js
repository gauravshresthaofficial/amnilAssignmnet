import "./style.css";
import { renderUI } from "./js/renderUI";
import { setupEventListeners } from "./js/setupEventListeners";
import { generatePassword } from "./js/generatePassword";

// Render the UI
renderUI();

// Set up event listeners after the UI is rendered
setTimeout(() => {
  // Query all DOM elements once
  const domElements = {
    passwordInput: document.querySelector("#password"),
    generateButton: document.querySelector("#generate"),
    copyButton: document.querySelector("#copy"),
    lengthInput: document.querySelector("#length"),
    uppercaseCheckbox: document.querySelector("#uppercase"),
    lowercaseCheckbox: document.querySelector("#lowercase"),
    numbersCheckbox: document.querySelector("#numbers"),
    symbolsCheckbox: document.querySelector("#symbols"),
    lengthDisplay: document.querySelector("#lengthDisplay"),
  };

  // Display the current length value
  domElements.lengthDisplay.textContent = domElements.lengthInput.value;

  // Set up event listeners
  setupEventListeners(domElements);

  // Generate password on page load
  generatePassword(domElements);
}, 1000);
