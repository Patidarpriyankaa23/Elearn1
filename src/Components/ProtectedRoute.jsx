import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-sm text-center">
          <h2 className="text-xl font-semibold text-red-600">Access Denied</h2>
          <p className="text-gray-700 mt-4">You must be logged in to access this page.</p>
          <Navigate to="/login" replace />
        </div>
      </div>
    );
  }

  if (role) {
    const decoded = JSON.parse(atob(token.split(".")[1])); // decode JWT
    if (decoded.role !== role) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm text-center">
            <h2 className="text-xl font-semibold text-red-600">Access Denied</h2>
            <p className="text-gray-700 mt-4">You do not have permission to access this page.</p>
            <Navigate to="/" replace />
          </div>
        </div>
      );
    }
  }

  return children;
}

export default ProtectedRoute;
