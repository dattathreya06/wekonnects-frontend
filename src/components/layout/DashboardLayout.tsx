import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import "./layout.css";

const DashboardLayout: React.FC = () => {
  return (
    <div className="dashboard-layout">
      <AdminHeader />
      <div className="layout-content">
        <AdminSidebar />
        <main className="dashboard-main">
          <Outlet /> {/* ✅ All admin child routes will render here */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
