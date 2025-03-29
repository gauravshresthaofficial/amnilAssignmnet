import React from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { logout, user, loading } = useAuth();
  console.log(user);
  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Home Page, {user.name}
      </h1>
      <button
        onClick={logout}
        className="bg-slate-700 text-white px-4 py-2 rounded-md"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
