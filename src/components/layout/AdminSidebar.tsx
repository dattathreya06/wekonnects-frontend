import React, { useState } from "react";
import "./layout.css";
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Megaphone,
  Users,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const AdminSidebar: React.FC = () => {
  const [openMenus, setOpenMenus] = useState<string[]>(["Jobs"]);

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) =>
      prev.includes(menu)
        ? prev.filter((m) => m !== menu)
        : [...prev, menu]
    );
  };

  return (
    <aside className="admin-sidebar">
      {/* ===== Logo Section ===== */}
      <div className="sidebar-logo">
        <img src={logo} alt="We Konnects Logo" />
      </div>

      <nav className="sidebar-nav">
        {/* ===== Dashboard ===== */}
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>

        {/* ===== Business ===== */}
        <div className="nav-group">
          <div className="nav-item" onClick={() => toggleMenu("Business")}>
            <Briefcase size={20} />
            <span>Business</span>
            <ChevronDown className="chevron" />
          </div>

          {openMenus.includes("Business") && (
            <div className="sub-menu">
              <NavLink
                to="/admin/business/info"
                className={({ isActive }) => (isActive ? "sub-active" : "")}
              >
                Business Info
              </NavLink>
              <NavLink
                to="/admin/business/list"
                className={({ isActive }) => (isActive ? "sub-active" : "")}
              >
                Business List
              </NavLink>
            </div>
          )}
        </div>

        {/* ===== Jobs ===== */}
        <div className="nav-group">
          <div className="nav-item" onClick={() => toggleMenu("Jobs")}>
            <FileText size={20} />
            <span>Jobs</span>
            <ChevronDown className="chevron" />
          </div>

          {openMenus.includes("Jobs") && (
            <div className="sub-menu">
              <NavLink
                to="/admin/jobs/education"
                className={({ isActive }) => (isActive ? "sub-active" : "")}
              >
                Education Info
              </NavLink>
              <NavLink
                to="/admin/jobs/apply-list"
                className={({ isActive }) => (isActive ? "sub-active" : "")}
              >
                Apply Job List
              </NavLink>
            </div>
          )}
        </div>

        {/* ===== Post Jobs ===== */}
        <div className="nav-group">
          <div className="nav-item" onClick={() => toggleMenu("Post Jobs")}>
            <Megaphone size={20} />
            <span>Post Jobs</span>
            <ChevronDown className="chevron" />
          </div>

          {openMenus.includes("Post Jobs") && (
            <div className="sub-menu">
              <NavLink
                to="/admin/jobs/profile"
                className={({ isActive }) => (isActive ? "sub-active" : "")}
              >
                Create Profile
              </NavLink>
              <NavLink
                to="/admin/jobs/post"
                className={({ isActive }) => (isActive ? "sub-active" : "")}
              >
                Post Job
              </NavLink>
              <NavLink
                to="/admin/jobs/list"
                className={({ isActive }) => (isActive ? "sub-active" : "")}
              >
                Jobs List
              </NavLink>
            </div>
          )}
        </div>

        {/* ===== Premium Leads ===== */}
        <div className="nav-group">
          <div className="nav-item" onClick={() => toggleMenu("Premium Leads")}>
            <Users size={20} />
            <span>Premium Leads</span>
            <ChevronDown className="chevron" />
          </div>

          {openMenus.includes("Premium Leads") && (
            <div className="sub-menu">
              <NavLink
                to="/admin/leads"
                className={({ isActive }) => (isActive ? "sub-active" : "")}
              >
                Total Leads
              </NavLink>
            </div>
          )}
        </div>

        {/* ===== Inquiries ===== */}
        <div className="nav-group">
          <div className="nav-item" onClick={() => toggleMenu("Inquiries")}>
            <HelpCircle size={20} />
            <span>My Inquiries</span>
            <ChevronDown className="chevron" />
          </div>

          {openMenus.includes("Inquiries") && (
            <div className="sub-menu">
              <NavLink
                to="/admin/inquiries"
                className={({ isActive }) => (isActive ? "sub-active" : "")}
              >
                List of Inquiries
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default AdminSidebar;

