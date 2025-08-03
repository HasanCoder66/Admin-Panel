import React from "react";
import Topbar from "../components/TopBar";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1 bg-gray-100">
          <Topbar />
        </div>
        {/* <main className="p-4">{children}</main> */}
      </div>
    </>
  );
};

export default DashboardLayout;
