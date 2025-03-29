const API_BASE_URL = "https://jsonserver-e1us.onrender.com";

export const fetchUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/users`);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  console.log("fetch ok");
  return response.json();
};

// Add a new user (for signup)
export const addUser = async (userData) => {
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
  return response.json();
};
