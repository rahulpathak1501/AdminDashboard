import React from "react";

function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md hidden md:block">
      <div className="p-4 font-bold text-lg">Dashboard</div>
      <ul className="p-4 space-y-2">
        <li>Overview</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
