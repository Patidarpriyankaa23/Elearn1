import React, { createContext, useState, useEffect } from "react";

// Create a Context for authentication
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for user data in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = JSON.parse(atob(token.split(".")[1])); // Decode the JWT
        setUser({ ...decoded, token }); // Store user data in state
      } catch (error) {
        console.error("Invalid token");
      }
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    localStorage.setItem("token", userData.token);
    setUser(userData); // Set user data in state after successful login
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null); // Clear user data from state on logout
  };

  const value = { user, login, logout, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use AuthContext in components
export const useAuth = () => React.useContext(AuthContext);

export default AuthContext;
