import React, { useState } from "react";
import "../../components/layout/layout.css";
import { ChevronUp, ChevronDown, Edit } from "lucide-react";

interface GroupData {
  id: number;
  state: string;
  city: string;
  groupName: string;
  members: string;
  status: boolean;
}

const GroupInformation: React.FC = () => {
  const [groups, setGroups] = useState<GroupData[]>([
    { id: 1, state: "Harikrishna", city: "Loans", groupName: "Harikrishna", members: "View", status: true },
    { id: 2, state: "Harikrishna", city: "Loans", groupName: "Harikrishna", members: "View", status: true },
    { id: 3, state: "Harikrishna", city: "Loans", groupName: "Manikanta", members: "View", status: false },
  ]);

  const toggleStatus = (index: number) => {
    const updated = [...groups];
    updated[index].status = !updated[index].status;
    setGroups(updated);
  };

  return (
    <div className="dashboard-content">
      <h1 className="page-title">Group Information</h1>

      <div className="applyjobs-table">
        <table>
          <thead>
            <tr>
              <th>SL.NO</th>
              <th>
                State Name
              </th>
              <th>
                City Name
              </th>
              <th>Group Name</th>
              <th>Members List</th>
              <th>
                Status 
              </th>
               <th>
                Action
              </th>
           
            </tr>
          </thead>

          <tbody>
            {groups.map((g, index) => (
              <tr key={index}>
                <td>{g.id}</td>
                <td>{g.state}</td>
                <td>{g.city}</td>
                <td>{g.groupName}</td>

                <td>
                  <button className="view-btn">View</button>
                </td>

                {/* ===== STATUS TOGGLE ===== */}
                <td>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={g.status}
                      onChange={() => toggleStatus(index)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </td>

                {/* EDIT BUTTON */}
                <td>
                  <button className="edit-btn">
                    <Edit size={20} color="#fff" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GroupInformation;
