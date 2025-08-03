import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", invoices: 10, projects: 50 },
  { month: "Feb", invoices: 20, projects: 150 },
  { month: "Mar", invoices: 40, projects: 20 },
  { month: "Apr", invoices: 80, projects: 60 },
  { month: "May", invoices: 20, projects: 100 },
  { month: "Jun", invoices: 100, projects: 150 },
  { month: "July", invoices: 150, projects: 200 },
  { month: "Aug", invoices: 80, projects: 100 },
  { month: "Sep", invoices: 50, projects: 80 },
  { month: "Oct ", invoices: 180, projects: 50 },
  { month: "Nov ", invoices: 40, projects: 30 },
  { month: "Dec ", invoices: 100, projects: 150 },
];

function RevenueChart() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-80">
      <h3 className="text-gray-700 font-semibold mb-4">Invoices & Projects</h3>
      <ResponsiveContainer width="100%" height="80%" >
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line dataKey="invoices" stroke="#8884d8" strokeWidth={3} />
          {/* //   type="monotone"  */}
          <Line dataKey="projects" stroke="#82ca9d" strokeWidth={3} />
          {/* //   type="monotone" */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueChart;
