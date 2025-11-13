import React, { useState } from "react";
import "../../components/layout/layout.css";
import ferrariLogo from "../../assets/icons/ferari.png";


interface Business {
  id: number;
  name: string;
  category: string;
  logo: string;
  package: string;
  city: string;
  joinDate: string;
  phone: string;
  active: boolean;
}

const BusinessList: React.FC = () => {
  const [businesses, setBusinesses] = useState<Business[]>([
    {
      id: 1,
      name: "Harikrishna",
      category: "Loans",
      logo: ferrariLogo,
      package: "Free",
      city: "Vijayawada",
      joinDate: "15/06/2025",
      phone: "9999999999",
      active: true,
    },
    {
      id: 1,
      name: "Harikrishna",
      category: "Loans",
      logo: ferrariLogo,
      package: "Free",
      city: "Vijayawada",
      joinDate: "15/06/2025",
      phone: "9999999999",
      active: true,
    },
    {
      id: 1,
      name: "Harikrishna",
      category: "Loans",
      logo: ferrariLogo,
      package: "Free",
      city: "Vijayawada",
      joinDate: "15/06/2025",
      phone: "9999999999",
      active: false,
    },
  ]);

  const toggleStatus = (index: number) => {
    setBusinesses((prev) =>
      prev.map((b, i) => (i === index ? { ...b, active: !b.active } : b))
    );
  };

  return (
    <div className="dashboard-content">
      <h1 className="page-title">Business Lists</h1>

      {/* Entries Dropdown */}
      <div className="category-header">
        <div className="entries-select">
          <span>Show</span>
          <select>
            <option>10</option>
            <option>20</option>
          </select>
          <span>entries</span>
        </div>
      </div>

      {/* Table */}
      <div className="business-table">
        <table>
          <thead>
            <tr>
              <th>Business ID</th>
              <th>Business Name</th>
              <th>Category Name</th>
              <th>Business Logo</th>
              <th>Package Name</th>
              <th>City Name</th>
              <th>Joining Date</th>
              <th>Phone Number</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {businesses.map((b, index) => (
              <tr key={index}>
                <td>{b.id}</td>
                <td className="bold-text">{b.name}</td>
                <td>{b.category}</td>
                <td>
                  <img src={b.logo} alt={b.name} className="business-logo" />
                </td>
                <td>
                  <span className="package-tag">{b.package}</span>
                </td>
                <td className="bold-text">{b.city}</td>
                <td>{b.joinDate}</td>
                <td>{b.phone}</td>
                <td>
                  <div
                    className={`toggle-switch ${b.active ? "on" : "off"}`}
                    onClick={() => toggleStatus(index)}
                  >
                    <div className="toggle-circle"></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination-container">
          <button className="pagination-btn prev">⟪ Previous</button>
          <div className="pagination-numbers">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                className={`page-num ${num === 3 ? "active" : ""}`}
              >
                {num}
              </button>
            ))}
          </div>
          <button className="pagination-btn next">Next ⟫</button>
        </div>

        <p className="pagination-info">Showing 1 to 10 of 14 entries</p>
      </div>
    </div>
  );
};

export default BusinessList;
