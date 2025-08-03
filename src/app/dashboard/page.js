"use client";

import Messages from "../components/Message";
import RevenueChart from "../components/RevenueChart";
import SummaryCards from "../components/SummaryCards";
import TaskTable from "../components/TaskTable";

export default function DashboardPage() {
  return (
    <>
      <div>
        <SummaryCards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <Messages />
      </div>
      <TaskTable />
      </div>
    </>
  );
}
