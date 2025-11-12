import React from "react";
import "../../components/layout/layout.css";
import {
  Users,
  Briefcase,
  Megaphone,
  FileText,
  Filter,
  Calendar,
} from "lucide-react";

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
          <FileText className="stat-icon" color="#F58220" size={48} />
          <div>
            <h2>25</h2>
            <p>Total Inquiries</p>
          </div>
        </div>

        <div className="stat-card">
          <Briefcase className="stat-icon" color="#F58220" size={48} />
          <div>
            <h2>29</h2>
            <p>Apply Jobs</p>
          </div>
        </div>

        <div className="stat-card">
          <Megaphone className="stat-icon" color="#F58220" size={48} />
          <div>
            <h2>12,000</h2>
            <p>Post Jobs</p>
          </div>
        </div>

        <div className="stat-card">
          <Users className="stat-icon" color="#F58220" size={48} />
          <div>
            <h2>1,75,458</h2>
            <p>Leads</p>
          </div>
        </div>
      </div>

      {/* ======= BUSINESS LISTING + USER ANALYTICS ======= */}
      <div className="analytics-container">
        {/* ==== Business Listing ==== */}
        <div className="business-listing-card">
          <div className="card-header">
            <h3>Business Listing</h3>
            <div className="time-tabs">
              <button>Monthly</button>
              <button>Weekly</button>
              <button className="active">Today</button>
            </div>
          </div>

          <div className="listing-summary">
            <div className="summary-box">
              <div className="summary-count green-bg">25</div>
              <span>New ●</span>
              <a href="#" className="manage-link">Manage ›</a>
            </div>

            <div className="summary-cards">
              <div className="mini-card">
                <h4>25</h4>
                <p>Total Listings</p>
              </div>
              <div className="mini-card">
                <h4>15</h4>
                <p>Approved</p>
              </div>
              <div className="mini-card">
                <h4>7</h4>
                <p>Rejected</p>
              </div>
            </div>

            <div className="chart-section">
              <div className="chart-pie"></div>
              <div className="chart-bars">
                <div className="bar-row">
                  <span>Total Taxes</span>
                  <div className="bar blue-bar" style={{ width: "70%" }}></div>
                  <span className="bar-value">25</span>
                </div>
                <div className="bar-row">
                  <span>Paid Taxes</span>
                  <div className="bar red-bar" style={{ width: "45%" }}></div>
                  <span className="bar-value">15</span>
                </div>
                <div className="bar-row">
                  <span>Pending Taxes</span>
                  <div className="bar green-bar" style={{ width: "20%" }}></div>
                  <span className="bar-value">7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==== User Analytics ==== */}
        <div className="user-analytics-card">
          <div className="card-header">
            <h3>User Analytics</h3>
            <div className="time-tabs">
              <button>Monthly</button>
              <button>Weekly</button>
              <button className="active">Today</button>
            </div>
          </div>

          <div className="summary-cards">
            <div className="mini-card">
              <h4>1,75,458</h4>
              <p>Total Users</p>
            </div>
            <div className="mini-card">
              <h4>1,75,451</h4>
              <p>Active</p>
            </div>
            <div className="mini-card">
              <h4>7</h4>
              <p>In Active</p>
            </div>
          </div>

          <div className="chart-bars analytics-bars">
            <div className="bar-row">
              <span>Total Owners</span>
              <div className="bar red-bar" style={{ width: "70%" }}></div>
              <span className="bar-value">1,75,458</span>
            </div>
            <div className="bar-row">
              <span>Active</span>
              <div className="bar blue-bar" style={{ width: "68%" }}></div>
              <span className="bar-value">1,75,451</span>
            </div>
            <div className="bar-row">
              <span>In Active</span>
              <div className="bar green-bar" style={{ width: "10%" }}></div>
              <span className="bar-value">7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
