import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../utils/api";
import { validateRegistration } from "../utils/validation";

const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const validationError = validateRegistration(formData);
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const userData = {
        name: formData.username,
        email: formData.email,
        password: formData.password,
      };
      await addUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      setFormData({ username: "", email: "", password: "" });
      navigate("/home");
    } catch (err) {
      console.log(err.message);
      setError("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="container w-2xl bg-white p-8 rounded-xl shadow-md space-y-4">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {["username", "email", "password"].map((field) => (
            <div key={field} className="space-y-2">
              <label
                htmlFor={field}
                className="text-lg font-medium text-gray-700 capitalize"
              >
                {field}
              </label>
              <input
                type={field === "password" ? "password" : "text"}
                id={field}
                name={field}
                onChange={handleChange}
                value={formData[field]}
                className="w-full p-2 border border-gray-300 rounded-md text-md font-light outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-700"
                disabled={loading}
              />
            </div>
          ))}
          <button
            type="submit"
            className={`w-full p-2 rounded-md text-lg font-medium transition duration-200 ease-in-out ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-slate-700 text-white hover:bg-slate-800"
            }`}
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Signup"}
          </button>
        </form>
        <p className="w-full text-center text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-slate-700 font-medium hover:text-slate-800 transition duration-200 ease-in-out"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
