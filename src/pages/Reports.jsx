import React from "react";
import ReportCard from "../components/ReportCard";
import ReportChart from "../components/ReportChart";
import ReportTable from "../components/ReportTable";

const Reports = () => {
  const metrics = [
    { title: "New Signups", value: 340 },
    { title: "Report Downloads", value: 1200 },
    { title: "Active Users", value: 890 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((item, index) => (
          <ReportCard key={index} {...item} />
        ))}
      </div>
      <ReportChart />
      <ReportTable />
    </div>
  );
};

export default Reports;
