import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <aside
      className={`fixed z-20 inset-y-0 left-0 bg-white w-64 shadow-md transform transition-transform duration-300
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static`}
    >
      <div className="p-4 font-bold text-lg border-b">Dashboard</div>
      <ul className="p-4 space-y-2">
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Overview
          </Link>
        </li>
        <li>
          <Link to="/reports" onClick={() => setIsOpen(false)}>
            Reports
          </Link>
        </li>
        <li>
          <Link to="/settings" onClick={() => setIsOpen(false)}>
            Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
