import React from "react";
import "../../components/layout/layout.css";
import { useNavigate } from "react-router-dom";

const AddCategory: React.FC = () => {
    const navigate = useNavigate();
  return (
    <div className="dashboard-content">
      <h1 className="page-title">Category Management</h1>

      <div className="dashboard-card">
        <div className="form-section">
          <div className="form-group">
            <label>Category Name</label>
            <input
              type="text"
              placeholder="Enter category Name"
            />
          </div>

          <div className="form-group">
            <label>Category Image</label>
            <div className="file-upload">
              <input type="file" id="fileUpload" />
            </div>
          </div>

          <div className="form-group">
            <label>Category Status</label>
            <select>
              <option>Select status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="form-actions">
            <button
                    className="add-category-btn"
                    
                    onClick={() => navigate("/admin/categories")}
                    style={{ marginLeft: '10px' }}
                    >
                    Back
            </button>
            <button className="save-btn">Add Category</button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
