import "../styles/auth.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function SignupPage() {
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
            <h2 className="auth-title">Sign In</h2>

            <form className="auth-form">
              <label>Name</label>
              <input type="text" placeholder="Enter your Name" />

              <label>Phone Number</label>
              <input type="text" placeholder="+91 9898989898" />

              <label>Mail ID</label>
              <input type="email" placeholder="Enter your Mail Id" />

              <label>Password</label>
              <input type="password" placeholder="Enter your Password" />

              <label>Re-Enter Password</label>
              <input type="password" placeholder="Re-Enter your Password" />

              <label>Enter Referral Code</label>
              <input type="text" placeholder="Enter your Referral Code" />

              <button type="submit" className="auth-btn">Send OTP</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
