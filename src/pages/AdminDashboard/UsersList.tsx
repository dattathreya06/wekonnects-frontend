import React, { useState } from "react";
import "../../components/layout/layout.css";
import { MoreVertical } from "lucide-react";

interface UserData {
  id: string;
  date: string;
  FullName: string;
  phoneno: string;
  city: string;
}

const UsersList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const [toggleStates, setToggleStates] = useState<boolean[]>(
    new Array(10).fill(true)
  );

  const toggleStatus = (index: number) => {
    setToggleStates((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const users: UserData[] = [
    { id: "#004562", date: "26 March 2024, 12:42 AM", FullName: "Harikrishna", phoneno: "9999999999", city: "Vijayawada" },
    { id: "#004562", date: "26 March 2024, 12:42 AM", FullName: "Harikrishna", phoneno: "9999999999", city: "Vijayawada" },
    { id: "#00456", date: "26 March 2024, 01:42 PM", FullName: "Harikrishna", phoneno: "9999999999", city: "Vijayawada" },
    { id: "#00456", date: "26 March 2024, 01:42 PM", FullName: "Harikrishna", phoneno: "9999999999", city: "Vijayawada" },
    { id: "#004561", date: "26 March 2024, 12:42 AM", FullName: "Harikrishna", phoneno: "9999999999", city: "Vijayawada" },
    { id: "#00451", date: "26 March 2024, 12:42 AM", FullName: "Harikrishna", phoneno: "9999999999", city: "Vijayawada" },
    { id: "#00451", date: "26 March 2024, 12:42 AM", FullName: "Harikrishna", phoneno: "9999999999", city: "Vijayawada" },
    { id: "#00459", date: "26 March 2024, 12:42 AM", FullName: "Harikrishna", phoneno: "9999999999", city: "Vijayawada" },
    { id: "#00458", date: "26 March 2024, 12:42 AM", FullName: "Harikrishna", phoneno: "9999999999", city: "Vijayawada" },
    { id: "#00457", date: "26 March 2024, 02:12 AM", FullName: "Harikrishna", phoneno: "9999999999", city: "Vijayawada" },
  ];

  return (
    <div className="dashboard-content">
      <h1 className="page-title">Users List</h1>

      <div className="applyjobs-table">
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Date</th>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>City Name</th>
              <th>Status</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id + index} className={""}>
                <td>{user.id}</td>
                <td>{user.date}</td>
                <td>{user.FullName}</td>
                <td>{user.phoneno}</td>
                <td>{user.city}</td>
                <td>
                  <div
                    className={`toggle-switch ${toggleStates[index] ? "on" : ""}`}
                    onClick={() => toggleStatus(index)}
                  >
                    <div className="toggle-circle"></div>
                  </div>
                </td>
                <td className="view-icon">
                  <MoreVertical size={18} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ===== PAGINATION ===== */}
        <div className="pagination-container">
          <button className="pagination-btn prev">⟪ Previous</button>
          <div className="pagination-numbers">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                className={`page-num ${num === currentPage ? "active" : ""}`}
                onClick={() => setCurrentPage(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <button className="pagination-btn next">Next ⟫</button>
        </div>
        <p className="pagination-info">Showing 10 from 46 data</p>
      </div>
    </div>
  );
};

export default UsersList;
