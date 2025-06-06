import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-purple-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Brand Name with Logo */}
        <Link to="/" className="flex items-center space-x-2 text-white text-2xl font-semibold">
          <img 
            src="https://t3.ftcdn.net/jpg/05/07/66/58/360_F_507665856_dFXIKJJ4SwROG0df8GNPBhqsZV44p6jn.jpg" 
            alt="Logo" 
            className="h-15 w-15 object-contain"
          />
          <span className="hidden sm:block">E-Learning</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {/* Login Button */}
          <Link
            to="/login"
            className="text-white text-lg bg-purple-600 hover:bg-purple-700 py-2 px-6 rounded-full transition duration-300 transform hover:scale-105"
          >
            Login
          </Link>

          {/* Register Button */}
          <Link
            to="/register"
            className="text-white text-lg bg-purple-600 hover:bg-purple-700 py-2 px-6 rounded-full transition duration-300 transform hover:scale-105"
          >
            Register
          </Link>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="text-white text-lg bg-red-500 hover:bg-red-600 py-2 px-6 rounded-full transition duration-300 transform hover:scale-105"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
