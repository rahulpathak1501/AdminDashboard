import React from "react";
import { FaBars } from "react-icons/fa";

function Navbar({ toggleSidebar }) {
  return (
    <header className="bg-white shadow p-4 flex items-center justify-between sticky top-0 z-20 w-full">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar}>
          <FaBars size={20} />
        </button>
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </div>

      {/* ✅ Desktop nav links
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
        <a href="#" className="hover:text-indigo-600">
          Overview
        </a>
        <a href="#" className="hover:text-indigo-600">
          Reports
        </a>
        <a href="#" className="hover:text-indigo-600">
          Settings
        </a>
      </nav> */}
    </header>
  );
}

export default Navbar;
