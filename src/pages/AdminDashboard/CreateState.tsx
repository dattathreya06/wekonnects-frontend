import React from "react";
import "../../components/layout/layout.css";

const CreateState: React.FC = () => {
  return (
    <div className="dashboard-content">
      <h1 className="page-title">Create State</h1>

      <div className="dashboard-card">
        <h2 className="section-title">State Management</h2>

        <div className="form-section">

          {/* State Name */}
          <div className="form-group full-width">
            <label>State Name</label>
            <input type="text" placeholder="Enter category Name" />
          </div>

          {/* State Image */}
          <div className="form-group full-width">
            <label>State Image</label>

            <div className="file-upload-container">
              <button className="file-btn">Choose File</button>
              <span className="file-name">No file Choosen</span>
            </div>
          </div>

          {/* State Status */}
          <div className="form-group full-width">
            <label>State status</label>
            <select>
              <option>Select status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Submit */}
          <div className="form-actions">
            <button className="save-btn">Add State</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateState;
