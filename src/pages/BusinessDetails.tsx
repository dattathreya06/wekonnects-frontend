import { useState } from "react";
import "../styles/businessDetails.css";
import { MapPin, MessageCircle } from "lucide-react";
import img1 from "../assets/businessphotos/parlor1.png";
import img2 from "../assets/businessphotos/parlor2.png";
import img3 from "../assets/businessphotos/parlor3.png";
import img4 from "../assets/businessphotos/parlor4.png";
import waxing from "../assets/icons/waxing.png";
import makeup from "../assets/icons/makeup.png";
import home from "../assets/icons/homeservices.png";
import facial from "../assets/icons/facialmask.png";

export default function BusinessDetails() {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Catalogue", "Services", "Photos", "Reviews"];

  const catalogueItems = [
    { title: "Ear Piercing", desc: "Ear piercing service is conducted by trained...." },
    { title: "Nose Piercing", desc: "Nose piercing involves creating a hole in the...." },
    { title: "Hair Blow Dry", desc: "Experience a fabulous transformation with our...." },
  ];

  const highlights = [
    { title: "Waxing", icon: waxing },
    { title: "Bridal Makeup", icon: makeup },
    { title: "Home Services Offered", icon: home },
    { title: "Facial", icon: facial },
  ];

  return (
    <section className="business-details-page">
      {/* ==== IMAGE GRID ==== */}
      <div className="image-grid">
        <img src={img1} alt="1" className="img img1" />
        <img src={img2} alt="2" className="img img2" />
        <img src={img3} alt="3" className="img img3" />
        <img src={img4} alt="4" className="img img4" />
      </div>

      {/* ==== BUSINESS INFO ==== */}
      <div className="business-header">
        <h2 className="business-name">Sri Kalki Beauty Parlour</h2>

        <div className="rating-row">
          <div className="rating-box">4.4</div>
          <p className="ratings-text">45 Ratings</p>
          <span className="label">Top Search</span>
        </div>

        <div className="location-row">
          <span className="dot gray"></span>
          <span>Kottawada, Warangal</span>
          <span className="dot green"></span>
          <span className="available">Available until 9:00 pm</span>
        </div>

        <div className="buttons-row">
          <button className="view-btn">View</button>
          <button className="whatsapp-btn">
            <MessageCircle size={18} color="#25D366" /> WhatsApp
          </button>
        </div>

        <div className="rating-stars">
          <p>Click to Rate</p>
          <div className="stars">⭐ ⭐ ⭐ ⭐ ⭐</div>
        </div>
      </div>

      {/* ==== TABS ==== */}
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ==== TAB CONTENT ==== */}
      <div className="tab-content">
        {activeTab === "Catalogue" && (
          <div className="catalogue-section">
            <h3>Catalogue</h3>
            <div className="catalogue-cards">
              {catalogueItems.map((item, i) => (
                <div key={i} className="catalogue-card">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <div className="catalogue-btns">
                    <button className="view-details">View Details</button>
                    <button className="enquire-now">Enquire Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Overview" && (
          <div className="overview-section">
            <h3>Highlights from the business</h3>
            <div className="highlights-grid">
              {highlights.map((h, i) => (
                <div key={i} className="highlight-card">
                  <img src={h.icon} alt={h.title} />
                  <p>{h.title}</p>
                </div>
              ))}
            </div>

            <div className="services-grid">
              <div>
                <h4>✅ Hair Care</h4>
                <p>Hair Extension, Hair Rebonding</p>
              </div>
              <div>
                <h4>✅ Skin Care</h4>
                <p>Face Lifting Treatment, Thermo Herb Facial</p>
              </div>
              <div>
                <h4>✅ Makeup</h4>
                <p>Groom Makeup, Basic Makeup</p>
              </div>
              <div>
                <h4>✅ Body Care</h4>
                <p>Steam Bath, Body Shaping</p>
              </div>
            </div>

            <button className="view-all-btn">View All</button>
          </div>
        )}
      </div>
    </section>
  );
}
