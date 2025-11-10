import "../styles/auth.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignupPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    referral: "",
  });

  // Error state
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    const newErrors = {
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    // Phone validation (Indian mobile number)
    const phoneRegex = /^\+91[6-9]\d{9}$/;
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter valid Indian number (+91 followed by 10 digits)";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
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

    // Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please re-enter password";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid, sending OTP...", formData);
      // Proceed with OTP logic
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
            <h2 className="auth-title">Sign Up</h2>

            <form className="auth-form" onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "input-error" : ""}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}

              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="+91 9898989898"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? "input-error" : ""}
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}

              <label>Mail ID</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Mail Id"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}

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

              <label>Re-Enter Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-Enter your Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? "input-error" : ""}
              />
              {errors.confirmPassword && (
                <span className="error-text">{errors.confirmPassword}</span>
              )}

              <label>Enter Referral Code</label>
              <input
                type="text"
                name="referral"
                placeholder="Enter your Referral Code"
                value={formData.referral}
                onChange={handleChange}
              />

              <button type="submit" className="auth-btn">
                Send OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}