import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when starting the login request

    try {
      const response = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password"); // Error handling for incorrect login
    } finally {
      setLoading(false); // Stop loading once the request is complete
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg space-y-6"
      >
        <h2 className="text-3xl font-semibold text-center text-blue-600">Login</h2>

        {error && <div className="text-red-600 text-center">{error}</div>} {/* Display error */}

        <div>
          <input
            type="email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading} // Disable input when loading
          />
        </div>

        <div>
          <input
            type="password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading} // Disable input when loading
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            disabled={loading} // Disable button when loading
          >
            {loading ? "Logging in..." : "Login"} {/* Show loading text */}
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
