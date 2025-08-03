import React from "react";
import Topbar from "../components/TopBar";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1 bg-gray-100 text-black">
          <Topbar />
          <main className="p-4">{children}</main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;