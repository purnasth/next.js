import LineChart from "./line-chart";

function BarChart() {
  return (
    <>
      <h2>Bar Chart</h2>
    </>
  );
}

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <BarChart />
      <LineChart />
    </div>
  );
}
