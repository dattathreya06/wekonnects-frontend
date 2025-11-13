import React from "react";
import "../../components/layout/layout.css";

const CreateGroup: React.FC = () => {
  return (
    <div className="dashboard-content">
      <h1 className="page-title">Create Groups</h1>

      <div className="dashboard-card group-form">
        <div className="form-section">
          {/* === Group Name === */}
          <div className="form-group">
            <label>Group Name</label>
            <input type="text" placeholder="Enter category Name" />
          </div>

          {/* === Select State === */}
          <div className="form-group">
            <label>Select State</label>
            <select>
              <option>No file Choosen</option>
              <option>Andhra Pradesh</option>
              <option>Telangana</option>
              <option>Karnataka</option>
            </select>
          </div>

          {/* === Select City === */}
          <div className="form-group">
            <label>Select City</label>
            <select>
              <option>Select status</option>
              <option>Vijayawada</option>
              <option>Hyderabad</option>
              <option>Bangalore</option>
            </select>
          </div>

          {/* === Button === */}
          <div className="form-actions align-right">
            <button className="save-btn">Create Group</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;
