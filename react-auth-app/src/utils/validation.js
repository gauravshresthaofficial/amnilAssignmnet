export const validateRegistration = (formData) => {
  const { username, email, password } = formData;

  if (!username || !email || !password) {
    return "All fields are required.";
  }

  if (username.length < 3) {
    return "Username must be at least 3 characters long.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address.";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters long.";
  }

  return null; // No errors
};

export const validateLogin = (formData) => {
  const { email, password } = formData;

  if (!email || !password) {
    return "Both fields are required.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address.";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters long.";
  }

  return null; // No errors
};
