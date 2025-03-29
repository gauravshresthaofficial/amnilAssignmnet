import React, { createContext, useState, useEffect, useContext } from "react";
import { fetchUsers } from "../utils/api";

const AuthContext = createContext();

// Manages and shares auth state.
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    const storedUser = localStorage.getItem("user");

    if (storedAuth === "true" && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse user data", error);
        handleLogout();
      }
    }
    setLoading(false);
  }, []);

  const handleLogin = async (formData) => {
    const { email, password } = formData;
    setLoading(true);

    try {
      const users = await fetchUsers();

      // Check if the user exists with the provided email
      const foundUser = users.find(
        (u) => u.email === email
      );

      // If no user is found, treat it as a "new user" or invalid email
      if (!foundUser) {
        throw new Error("Email does not exist. Please sign up first.");
      }

      // If the email exists but the password is incorrect
      if (foundUser.password !== password) {
        throw new Error("Incorrect password.");
      }

      // If the user exists and password matches, authenticate the user
      setIsAuthenticated(true);
      setUser(foundUser);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(foundUser));

      return true;
    } catch (err) {
      throw new Error(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };


  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Safely consumes that state.
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
