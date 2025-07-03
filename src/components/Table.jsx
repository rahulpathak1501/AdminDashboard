import React from "react";
import { tableData } from "../data/fakeData";

function Table() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="mb-4 font-semibold">Recent Transactions</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">User</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, idx) => (
            <tr key={idx} className="border-b">
              <td className="py-2">{item.user}</td>
              <td className="py-2">₹{item.amount}</td>
              <td className="py-2">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
