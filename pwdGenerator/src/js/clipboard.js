import { showNotification } from "./notification";

// Copy password to clipboard
const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    showNotification("Password copied to clipboard");
  } catch (error) {
    showNotification("Failed to copy password", true);
  }
};

export { copyToClipboard };
