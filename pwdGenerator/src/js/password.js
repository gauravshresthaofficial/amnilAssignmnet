import {
  getRandomLower,
  getRandomUpper,
  getRandomNumber,
  getRandomSymbol,
} from "./helper";

// Map character types to their corresponding random functions
const randomFunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  num: getRandomNumber,
  sym: getRandomSymbol,
};

/**
 * Generates a random password based on the specified criteria.
 * @param {number} len - The length of the password.
 * @param {boolean} upper - Include uppercase letters.
 * @param {boolean} lower - Include lowercase letters.
 * @param {boolean} num - Include numbers.
 * @param {boolean} sym - Include symbols.
 * @returns {string} The generated password.
 * @throws {Error} If no character types are selected.
 */

export const createPassword = (len, upper, lower, num, sym) => {
  // Create an array of selected character types
  const selectedTypes = [
    { type: "upper", enabled: upper },
    { type: "lower", enabled: lower },
    { type: "num", enabled: num },
    { type: "sym", enabled: sym },
  ].filter((type) => type.enabled);

  // Throw an error if no character types are selected
  if (selectedTypes.length === 0) {
    throw new Error("Please select at least one option");
  }

  let password = "";

  // Ensure at least one character from each selected type
  selectedTypes.forEach(({ type }) => {
    password += randomFunc[type]();
  });

  // Fill the remaining characters randomly
  for (let i = password.length; i < len; i++) {
    const randomType =
      selectedTypes[Math.floor(Math.random() * selectedTypes.length)].type;
    password += randomFunc[randomType]();
  }

  // Shuffle the password to avoid predictable patterns
  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  return password;
};
