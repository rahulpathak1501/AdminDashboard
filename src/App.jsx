import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardCard from "./components/DashboardCard";
import Chart from "./components/Chart";
import Table from "./components/Table";
import data from "./data/fakeData";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.cards.map((card, idx) => (
              <DashboardCard key={idx} {...card} />
            ))}
          </div>
          <Chart />
          <Table />
        </main>
      </div>
    </div>
  );
}

export default App;
