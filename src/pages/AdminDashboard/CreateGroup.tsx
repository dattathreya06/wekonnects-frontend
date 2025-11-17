import React, { useState, useEffect } from "react";
import { createGroup, getStates, getCities } from "../../api/api";
import "../../components/layout/layout.css";

interface State {
  _id: string;
  name: string;
}

interface City {
  _id: string;
  name: string;
}

const CreateGroup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    status: "active" as "active" | "inactive",
    stateId: "",
    cityId: "",
  });

  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
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
        setStates(res.data.data); // adjust based on your API response
      } catch (err: any) {
        setError("Failed to load states");
      } finally {
        setLoading(false);
      }
    };
    fetchStates();
  }, []);

  // Fetch Cities when State changes
  useEffect(() => {
    if (!formData.stateId) {
      setCities([]);
      return;
    }

    const fetchCities = async () => {
      try {
        setLoading(true);
        const res = await getCities(formData.stateId);
        setCities(res.data.data);
      } catch (err: any) {
        setError("Failed to load cities");
      } finally {
        setLoading(false);
      }
    };
    fetchCities();
  }, [formData.stateId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "stateId" && { cityId: "" }), // reset city
    }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.stateId || !formData.cityId) {
      setError("All fields are required.");
      return;
    }

    setSubmitLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await createGroup({
        name: formData.name,
        status: formData.status,
        stateId: formData.stateId,  // Real ObjectId
        cityId: formData.cityId,    // Real ObjectId
      });

      setSuccess(true);
      setFormData({
        name: "",
        status: "active",
        stateId: "",
        cityId: "",
      });
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to create group");
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <div className="dashboard-content">
      <h1 className="page-title">Create Group</h1>

      <div className="dashboard-card group-form">
        <form className="form-section" onSubmit={handleSubmit}>
          {/* Group Name */}
          <div className="form-group">
            <label>Group Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Enter group name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Select State */}
          <div className="form-group">
            <label>Select State *</label>
            <select
              name="stateId"
              value={formData.stateId}
              onChange={handleChange}
              required
              disabled={loading}
            >
              <option value="">{loading ? "Loading..." : "Select a state"}</option>
              {states.map((state) => (
                <option key={state._id} value={state._id}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          {/* Select City */}
          <div className="form-group">
            <label>Select City *</label>
            <select
              name="cityId"
              value={formData.cityId}
              onChange={handleChange}
              required
              disabled={loading || !formData.stateId}
            >
              <option value="">
                {formData.stateId
                  ? loading
                    ? "Loading cities..."
                    : "Select a city"
                  : "Select state first"}
              </option>
              {cities.map((city) => (
                <option key={city._id} value={city._id}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          {/* Messages */}
          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text">Group created successfully!</p>}

          {/* Submit */}
          <div className="form-actions align-right">
            <button
              type="submit"
              className="save-btn"
              disabled={submitLoading}
            >
              {submitLoading ? "Creating..." : "Create Group"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;