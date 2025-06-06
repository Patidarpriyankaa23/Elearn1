import React, { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await API.get("/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (err) {
        console.error("Error fetching user:", err);
        alert("Failed to fetch user data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-lg text-gray-600 animate-pulse">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-blue-600 mb-4">
          Welcome, {user?.name || "User"}
        </h1>
        <p className="text-gray-700">This is your dashboard.</p>

        <div className="mt-6">
          <h2 className="text-xl font-medium mb-2 text-gray-800">Your Info:</h2>
          <div className="bg-gray-100 rounded-md p-4">
            <p><span className="font-semibold">Name:</span> {user?.name}</p>
            <p><span className="font-semibold">Email:</span> {user?.email}</p>
            <p><span className="font-semibold">Role:</span> {user?.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
