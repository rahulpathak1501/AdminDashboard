import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Layout grid */}
        <div className="md:flex">
          {/* Sidebar */}
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />

          {/* Content wrapper */}
          <div
            className={`flex-1 transition-all duration-300 ${
              isSidebarOpen ? "ml-64" : "ml-0"
            } md:ml-64`}
          >
            {/* Navbar */}
            <div className="p-6">
              <Navbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
            </div>

            {/* Main content */}
            <main className="p-6">
              <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
