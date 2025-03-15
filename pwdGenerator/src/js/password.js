import { randomFunc } from "./randomGenerators";
import { shufflePassword } from "./utils";

// Generates a random password based on the specified criteria.
export const createPassword = (len, selectedTypes) => {
  let password = "";

  // Ensure at least one character from each selected type
  password = selectedTypes.reduce(
    (acc, { type }) => acc + randomFunc[type](),
    ""
  );

  // Fill the remaining characters randomly
  for (let i = password.length; i < len; i++) {
    const randomType =
      selectedTypes[Math.floor(Math.random() * selectedTypes.length)].type;
    password += randomFunc[randomType]();
  }

  // Shuffle the password to avoid predictable patterns
  return shufflePassword(password);
};
