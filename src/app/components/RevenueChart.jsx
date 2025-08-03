import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", invoices: 200, projects: 100 },
  { month: "Feb", invoices: 150, projects: 50 },
  { month: "Mar", invoices: 100, projects: 120 },
  { month: "Apr", invoices: 150, projects: 60 },
  { month: "May", invoices: 200, projects: 200 },
  { month: "Jun", invoices: 300, projects: 350 },
  { month: "July", invoices: 350, projects: 100 },
  { month: "Aug", invoices: 400, projects: 300 },
  { month: "Sep", invoices: 200, projects: 500 },
  { month: "Oct ", invoices: 180, projects: 250 },
  { month: "Nov ", invoices: 400, projects: 150 },
  { month: "Dec ", invoices: 300, projects: 300 },
];

function RevenueChart() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-100">
      <h3 className="text-gray-700 font-semibold mb-4 text-lg">
        Invoices & Projects
      </h3>
      <ResponsiveContainer width="100%" height="80%">
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
