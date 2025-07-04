import DashboardCard from "../components/DashboardCard";
import Chart from "../components/Chart";
import Table from "../components/Table";
import data from "../data/fakeData";

function Overview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.cards.map((card, idx) => (
          <DashboardCard key={idx} {...card} />
        ))}
      </div>
      <Chart />
      <Table />
    </div>
  );
}

export default Overview;
