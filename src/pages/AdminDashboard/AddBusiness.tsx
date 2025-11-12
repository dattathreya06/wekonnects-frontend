import React from "react";
import "../../components/layout/layout.css";
import { MapPin, Upload, Edit } from "lucide-react";

const AddBusiness: React.FC = () => {
  return (
    <div className="dashboard-content add-business-page">
      <h1 className="page-title">Added New Business</h1>

      {/* ===== Business Information Section ===== */}
      <div className="business-form">
        <h2 className="section-title">Business Information</h2>

        {/* === Row 1 === */}
        <div className="form-row">
          <div className="form-group required">
            <label>Business Name</label>
            <input type="text" placeholder="Enter Business name" />
          </div>

          <div className="form-group required">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter Phone number" />
          </div>

          <div className="form-group required">
            <label>Image</label>
            <input type="file" />
          </div>

          <div className="form-group">
            <label>Alternative Number</label>
            <input type="text" placeholder="Enter Business name" />
          </div>
        </div>

        {/* === Row 2 === */}
        <div className="form-row">
          <div className="form-group">
            <label>Whatsapp Number</label>
            <input type="text" placeholder="Whatsapp Number" />
          </div>

          <div className="form-group">
            <label>City Name</label>
            <input type="text" placeholder="City name" />
          </div>

          <div className="form-group">
            <label>PIN Code</label>
            <input type="text" placeholder="Pin code" />
          </div>

          <div className="form-group">
            <label>Owner Name</label>
            <input type="text" placeholder="Owner name" />
          </div>
        </div>

        {/* === Row 3 === */}
        <div className="form-row">
          <div className="form-group required">
            <label>Owner Mobile</label>
            <input type="text" placeholder="Owner mobile" />
          </div>

          <div className="form-group">
            <label>Date Of Birth</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Business Category</label>
            <select>
              <option>Choose facility</option>
              <option>Loans</option>
              <option>Software</option>
            </select>
          </div>

          <div className="form-group">
            <label>Sub Category</label>
            <select>
              <option>Choose facility</option>
            </select>
          </div>
        </div>

        {/* === Row 4 === */}
        <div className="form-row">
          <div className="form-group">
            <label>Business Hours</label>
            <select>
              <option>Choose facility</option>
            </select>
          </div>

          <div className="form-group">
            <label>Business Type</label>
            <select>
              <option>Choose facility</option>
            </select>
          </div>
        </div>

        {/* === Map === */}
        <div className="map-container">
          <div className="map-tabs">
            <button className="map-tab active">Map</button>
            <button className="map-tab">Satellite</button>
          </div>
          <input
            type="text"
            className="location-input"
            placeholder="Enter Location"
          />
          <div className="map-placeholder">
            <MapPin size={28} color="#8735BC" />
          </div>
        </div>

        {/* === Description & Media === */}
        <div className="form-row large">
          <div className="form-group">
            <label>Business Description</label>
            <textarea rows={4}></textarea>
          </div>

          <div className="form-group">
            <label>Images & Videos</label>
            <div className="upload-box">
              <Upload size={40} color="#8735BC" />
              <p>Upload files</p>
            </div>
          </div>

          <div className="form-group small">
            <label>Latitude</label>
            <input type="text" placeholder="Enter store latitude" />
            <label>Longitude</label>
            <input type="text" placeholder="Enter store longitude" />
          </div>
        </div>

        {/* === Submit === */}
        <div className="form-actions">
          <button className="save-btn">Add / Update Business</button>
        </div>
      </div>

      {/* ===== Business Inquiry Section ===== */}
      <h2 className="section-title">Business Inquiry</h2>
      <div className="business-table">
        <table>
          <thead>
            <tr>
              <th>Inquiry Id</th>
              <th>Date</th>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>City Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>000001</td>
              <td>12/06/2025</td>
              <td>Harikrishna Prasad</td>
              <td>9999999999</td>
              <td>Vijayawada</td>
              <td>
                <Edit color="#0622AF" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddBusiness;
