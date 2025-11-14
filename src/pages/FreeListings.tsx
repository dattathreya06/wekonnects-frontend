import React, { useState } from "react";
import {
  Search,
  MapPin,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
} from "lucide-react";
import "../styles/freelistings.css";

const FreeListing: React.FC = () => {
  // -------------------------
  // DUMMY DATA
  // -------------------------
  const jobCategories = [
    { id: 1, title: "Customer Support", jobs: 165 },
    { id: 2, title: "Education/Training", jobs: 102 },
    { id: 3, title: "Research / Consultancy", jobs: 146 },
    { id: 4, title: "Production/Operation", jobs: 108 },
    { id: 5, title: "Health and Fitness", jobs: 139 },
    { id: 6, title: "Call Center", jobs: 136 },
    { id: 7, title: "Engineer/Architects", jobs: 134 },
    { id: 8, title: "Accounting/Finance", jobs: 130 },
  ];

  const topFilters = [
    "All",
    "Accounting/Finance",
    "Production/Operation",
    "Bank/Non-Bank Fin .Institution",
    "Education/Training",
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const jobsList = [
    {
      id: 1,
      company: "Tech Technologies",
      role: "Data Coordinator",
      type: "Full Time",
      location: "Hyderabad",
      salary: "₹20K–30K",
    },
    {
      id: 2,
      company: "Next Networks",
      role: "Software Engineer",
      type: "Full Time",
      location: "Chennai",
      salary: "₹25K–30K",
    },
    {
      id: 3,
      company: "Green Technologies",
      role: "Design Director",
      type: "Full Time",
      location: "Bangalore",
      salary: "₹40K–50K",
    },
    {
      id: 4,
      company: "Smart Holdings",
      role: "Software Trainer",
      type: "Full Time",
      location: "Vijayawada",
      salary: "₹20K–25K",
    },
  ];

  // -------------------------
  // JSX RETURN
  // -------------------------
  return (
    <div className="free-main">

      {/* SECTION 1 — HERO SEARCH */}
      <div className="hero-section">
        <h1 className="hero-title">
          Discover More Than <span className="highlight">500+ Jobs✨</span>
        </h1>
        <p className="hero-subtext">
          It is an excellent platform for job seekers searching for new
          career heights and passionate about startups.
        </p>

        <div className="search-box">
          <div className="search-item">
            <Search size={20} />
            <input type="text" placeholder="Search by keyword" />
          </div>

          <div className="search-item">
            <BriefcaseBusiness size={20} />
            <select>
              <option>Select Job Type</option>
              <option>Full Time</option>
              <option>Part Time</option>
            </select>
          </div>

          <div className="search-item">
            <MapPin size={20} />
            <select>
              <option>Select Location</option>
              <option>Hyderabad</option>
              <option>Bangalore</option>
            </select>
          </div>

          <button className="search-btn">Search Job</button>
        </div>

        <p className="popular-searches">
          Popular Searches:
          <span> Job Seekers</span>, <span> Job Match</span>,{" "}
          <span> Salary Estimates</span>
        </p>
      </div>

      {/* SECTION 2 — EXPLORE BY CATEGORY */}
      <div className="category-section">
        <h2 className="section-title">
          Explore by <span className="purple">Category</span>
        </h2>

        <div className="category-grid">
          {jobCategories.map((cat) => (
            <div key={cat.id} className="category-card">
              <div className="cat-icon"><Building2 size={28} color="#8735BC" /></div>
              <h3>{cat.title}</h3>
              <p>{cat.jobs} jobs available</p>
              <ChevronRight className="cat-arrow" size={20} />
            </div>
          ))}
        </div>

        <p className="all-categories">All Categories →</p>
      </div>

      {/* SECTION 3 — TOP HOT JOB HIRING */}
      <div className="hot-section">
        <h2 className="section-title">
          Top Hot 🔥 Job <span className="purple">Hiring Now</span>
        </h2>

        {/* Filters */}
        <div className="hot-filters">
          {topFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`hot-filter-btn ${
                activeFilter === f ? "active" : ""
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* JOB CARDS */}
        <div className="jobs-grid">
          {jobsList.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-top">
                <div className="job-type">{job.type}</div>
              </div>

              <h3 className="job-company">{job.company}</h3>
              <p className="job-role">{job.role}</p>

              <p className="job-desc">
                Manage production workflows and operations by overseeing tasks...
              </p>

              <div className="job-meta">
                <div className="meta-item">
                  <MapPin size={16} />
                  <span>{job.location}</span>
                </div>
                <div className="meta-item">
                  <BriefcaseBusiness size={16} />
                  <span>{job.salary}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreeListing;
