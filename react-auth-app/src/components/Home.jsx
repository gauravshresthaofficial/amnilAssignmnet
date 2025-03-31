import React from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { logout, user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100 p-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">
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
