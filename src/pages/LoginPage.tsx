import { Link } from "react-router-dom";
import "../styles/auth.css";
import logo from "../assets/logo.png";

export default function LoginPage() {
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

            <form className="auth-form">
              <label>Phone Number</label>
              <input type="text" placeholder="Enter your phone number" />

              <label>Password</label>
              <input type="password" placeholder="Enter your Password" />

              <button type="submit" className="auth-btn">Login</button>
            </form>

            <p className="auth-footer">
              User account?{" "}
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
