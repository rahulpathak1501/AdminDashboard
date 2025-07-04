import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const reportData = [
  { category: "Q1", value: 400 },
  { category: "Q2", value: 800 },
  { category: "Q3", value: 600 },
  { category: "Q4", value: 1000 },
];

function ReportChart() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="mb-4 font-semibold">Quarterly Downloads</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={reportData}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#3B82F6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ReportChart;
