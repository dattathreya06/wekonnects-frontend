import { Link } from "react-router-dom";
import "../styles/auth.css";
import logo from "../assets/logo.png";
import { useState } from "react";

export default function LoginPage() {
  // Form state
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  // Error state
  const [errors, setErrors] = useState({
    phone: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validation logic
  const validateForm = () => {
    let isValid = true;
    const newErrors = { phone: "", password: "" };

    // Phone validation (Indian mobile number: +91 followed by 10 digits)
    const phoneRegex = /^\+91[6-9]\d{9}$/;
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter valid Indian number (+91 followed by 10 digits)";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login successful with:", formData);
      // Proceed with login API call
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-container">
        {/* Left Side Logo */}
        <div className="auth-left">
          <Link to="/">
            <img src={logo} alt="We Konnects" className="auth-logo" />
          </Link>
        </div>

        {/* Right Side Form */}
        <div className="auth-right">
          <div className="auth-box">
            <h4 className="welcome-text">Welcome to We Konnects</h4>
            <h2 className="auth-title">Login to your Account</h2>

            <form className="auth-form" onSubmit={handleSubmit}>
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? "input-error" : ""}
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}

              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "input-error" : ""}
              />
              {errors.password && <span className="error-text">{errors.password}</span>}

              <button type="submit" className="auth-btn">
                Login
              </button>
            </form>

            <p className="auth-footer">
              New user?{" "}
              <Link to="/signup" className="auth-link">
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}