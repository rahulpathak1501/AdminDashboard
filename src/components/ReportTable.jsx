import React, { useState } from "react";

// Fake data
const fakeData = [
  { id: 1, report: "Sales Q1", downloads: 250 },
  { id: 2, report: "Sales Q2", downloads: 300 },
  { id: 3, report: "Customer Feedback", downloads: 180 },
  { id: 4, report: "Marketing Overview", downloads: 450 },
  { id: 5, report: "User Growth", downloads: 375 },
];

function ReportTable() {
  const [search, setSearch] = useState("");
  const filteredData = fakeData.filter((item) =>
    item.report.toLowerCase().includes(search.toLowerCase())
  );

  const downloadCSV = () => {
    const csvHeader = "Report,Downloads\n";
    const csvRows = filteredData
      .map((row) => `${row.report},${row.downloads}`)
      .join("\n");
    const csvContent = "data:text/csv;charset=utf-8," + csvHeader + csvRows;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "report_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white p-4 rounded shadow space-y-4">
      <div className="flex flex-col md:flex-row md:justify-between gap-2">
        <input
          type="text"
          placeholder="Search reports..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/3"
        />
        <button className="bg-blue-600 text-black px-4 py-2 rounded enabled:hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
          Download CSV
        </button>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b text-gray-600">
            <th className="py-2">Report</th>
            <th className="py-2">Downloads</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan="2" className="text-center py-4 text-gray-500">
                No results found.
              </td>
            </tr>
          ) : (
            filteredData.map((row) => (
              <tr key={row.id} className="border-b">
                <td className="py-2">{row.report}</td>
                <td className="py-2">{row.downloads}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ReportTable;
