const API_BASE_URL = "https://jsonserver-e1us.onrender.com";

// Fetch users from the API
export const fetchUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/users`);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};

// Add a new user (for signup)
export const addUser = async (userData) => {
  try {
    const users = await fetchUsers(); // Fetch the list of users
    const existingUser = users.find((user) => user.email === userData.email); // Check if the email already exists

    if (existingUser) {
      throw new Error("Email already exists"); // Throw an error if the email already exists
    }

    // If email does not exist, proceed to add the new user
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Failed to add user");
    }

    return response.json(); // Return the response after adding the user
  } catch (error) {
    throw new Error(error.message); // Handle errors
  }
};
