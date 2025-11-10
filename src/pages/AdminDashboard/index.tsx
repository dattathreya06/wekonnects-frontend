import React from "react";
import "../../components/layout/layout.css";
import { Users, Briefcase, Megaphone, FileText, Filter, Calendar } from "lucide-react";

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-home">
      {/* ======= PAGE HEADER ======= */}
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-subtitle">Welcome to Admin!</p>
        </div>

        <div className="dashboard-filters">
          <div className="filter-btn">
            <span>
              <Filter size={18} color="#8735BC" /> Filter
            </span>
          </div>
          <div className="filter-btn">
            <span>
              <Calendar size={18} color="#8735BC" /> Filter Period
            </span>
            <p className="filter-date">4 June 2024 – 4 July 2024</p>
          </div>
        </div>
      </div>

      {/* ======= DASHBOARD STATS ======= */}
      <div className="stats-grid">
        <div className="stat-card">
          <FileText className="stat-icon" color="#F58220" />
          <div>
            <h2>25</h2>
            <p>Total Inquiries</p>
          </div>
        </div>

        <div className="stat-card">
          <Briefcase className="stat-icon" color="#F58220" />
          <div>
            <h2>29</h2>
            <p>Apply Jobs</p>
          </div>
        </div>

        <div className="stat-card">
          <Megaphone className="stat-icon" color="#F58220" />
          <div>
            <h2>12,000</h2>
            <p>Post Jobs</p>
          </div>
        </div>

        <div className="stat-card">
          <Users className="stat-icon" color="#F58220" />
          <div>
            <h2>1,75,458</h2>
            <p>Leads</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
