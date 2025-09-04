import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ user }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/"; // reload to login
  };

  return (
    <header className="flex justify-between items-center bg-white shadow px-6 py-4">
      {/* Page Title */}
      <h1 className="text-xl font-semibold">Dashboard</h1>

      {/* User Menu */}
      <div className="relative">
        <img
          src={user?.avatar || "https://randomuser.me/api/portraits/men/1.jpg"}
          alt="User Avatar"
          className="w-10 h-10 rounded-full cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
            <div className="p-4 border-b">
              <p className="font-semibold">{user?.name || "User"}</p>
              <p className="text-sm text-gray-500">{user?.email || "user@example.com"}</p>
            </div>
            <button
              onClick={() => navigate("/settings")}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Settings
            </button>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
