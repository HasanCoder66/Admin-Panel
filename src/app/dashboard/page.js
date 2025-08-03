"use client";

import Messages from "../components/Message";
import RevenueChart from "../components/RevenueChart";
import SummaryCards from "../components/SummaryCards";
import TaskTableToDo from "../components/TaskTableOne";
import TaskTable from "../components/TaskTableOne";
import TaskTableInProgress from "../components/TaskTableTwo";
import TopTabs from "../components/TopTabs";

export default function DashboardPage() {
  return (
    <>
      <div>
        <TopTabs />
        <SummaryCards />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <Messages />
        </div>
        <TaskTableToDo />
        <TaskTableInProgress />
      </div>
    </>
  );
}
