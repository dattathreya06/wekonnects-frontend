// import React from "react";
// import "../../components/layout/layout.css";

// const CreateCity: React.FC = () => {
//   return (
//     <div className="dashboard-content">
//       <h1 className="page-title">Create City</h1>

//       <div className="dashboard-card">
//         <h2 className="section-title">City Management</h2>

//         <div className="form-section">

//           {/* State Name */}
//           <div className="form-group full-width">
//             <label>State</label>
//             <select>
//               <option>Select State</option>
//               <option>Andhra Pradesh</option>
//               <option>Telangana</option>
//               <option>TamilNadu</option>
//               <option>Karnatata</option>
//             </select>
//           </div>

//           <div className="form-group full-width">
//             <label>City Name</label>
//             <input type="text" placeholder="Enter city name" />
//           </div>

         

//           {/* City Status */}
//           <div className="form-group full-width">
//             <label>City Status</label>
//             <select>
//               <option>Select status</option>
//               <option>Active</option>
//               <option>Inactive</option>
//             </select>
//           </div>

//           {/* Submit */}
//           <div className="form-actions">
//             <button className="save-btn">Add city</button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateCity;


import React, { useState, useEffect } from "react";
import { createCity, getStates } from "../../api/api"; 
import "../../components/layout/layout.css";

interface State {
  _id: string;
  name: string;
}

const CreateCity: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    status: "active" as "active" | "inactive",
    stateId: "",
  });

  const [states, setStates] = useState<State[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Fetch States on Mount
  useEffect(() => {
    const fetchStates = async () => {
      try {
        setLoading(true);
        const res = await getStates();
        setStates(res.data.data || res.data); // adjust based on your API
      } catch (err: any) {
        setError("Failed to load states");
      } finally {
        setLoading(false);
      }
    };
    fetchStates();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError("City name is required.");
      return;
    }
    if (!formData.stateId) {
      setError("Please select a state.");
      return;
    }

    setSubmitLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await createCity({
        name: formData.name.trim(),
        status: formData.status,
        stateId: formData.stateId, // Real ObjectId
      });

      setSuccess(true);
      setFormData({
        name: "",
        status: "active",
        stateId: "",
      });
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to create city");
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <div className="dashboard-content">
      <h1 className="page-title">Create City</h1>

      <div className="dashboard-card">
        <h2 className="section-title">City Management</h2>

        <form className="form-section" onSubmit={handleSubmit}>
          {/* Select State */}
          <div className="form-group full-width">
            <label>State *</label>
            <select
              name="stateId"
              value={formData.stateId}
              onChange={handleChange}
              required
              disabled={loading}
            >
              <option value="">
                {loading ? "Loading states..." : "Select State"}
              </option>
              {states.map((state) => (
                <option key={state._id} value={state._id}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          {/* City Name */}
          <div className="form-group full-width">
            <label>City Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Enter city name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* City Status */}
          <div className="form-group full-width">
            <label>City Status *</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Messages */}
          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text">City created successfully!</p>}

          {/* Submit */}
          <div className="form-actions">
            <button
              type="submit"
              className="save-btn"
              disabled={submitLoading}
            >
              {submitLoading ? "Adding..." : "Add City"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCity;