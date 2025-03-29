import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { validateLogin } from "../utils/validation";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = validateLogin(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      await login(formData);
      navigate("/");
    } catch (err) {
      console.log(err.message);
      setError(err.message || "Failed to login. Please try again.");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="container w-2xl bg-white p-8 rounded-xl shadow-md space-y-4">
        <h1 className="text-2xl font-bold">Login</h1>
        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {["email", "password"].map((field) => (
            <div key={field} className="space-y-2">
              <label
                htmlFor={field}
                className="text-lg font-medium text-gray-700 capitalize"
              >
                {field}
              </label>
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                autoComplete={field === "password" ? "off" : "on"}
                className="w-full p-2 border border-gray-300 rounded-md text-md font-light outline-none focus:border-slate-700 focus:ring-1 focus:ring-slate-700"
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-700 text-white p-2 rounded-md text-lg font-medium hover:bg-slate-800 transition duration-200 ease-in-out disabled:opacity-50"
          >
            {loading ? "Processing..." : "Login"}
          </button>
        </form>

        <p className="w-full text-center text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-slate-700 font-medium hover:text-slate-800 transition duration-200 ease-in-out"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
