import React from "react";
import "../../components/layout/layout.css";

const CreateCity: React.FC = () => {
  return (
    <div className="dashboard-content">
      <h1 className="page-title">Create City</h1>

      <div className="dashboard-card">
        <h2 className="section-title">City Management</h2>

        <div className="form-section">

          {/* State Name */}
          <div className="form-group full-width">
            <label>State</label>
            <select>
              <option>Select State</option>
              <option>Andhra Pradesh</option>
              <option>Telangana</option>
              <option>TamilNadu</option>
              <option>Karnatata</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label>City Name</label>
            <input type="text" placeholder="Enter city name" />
          </div>

         

          {/* City Status */}
          <div className="form-group full-width">
            <label>City Status</label>
            <select>
              <option>Select status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Submit */}
          <div className="form-actions">
            <button className="save-btn">Add city</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateCity;
