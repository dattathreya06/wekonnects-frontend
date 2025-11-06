import { useState } from "react";
import heroMain from "../assets/hero-main.png"; 
import { Search, MapPin, Mic } from "lucide-react";

export default function Hero() {
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");

  return (
    <section className="hero-section">
      <div className="container hero-inner">
        {/* ======= Title ======= */}
        <h1 className="hero-title">
          Search across<span className="highlight">‘4.7 Crore+’</span> Businesses
        </h1>

        {/* ======= Search Row ======= */}
        <div className="hero-search" style={{ width: "100%" }}>
          {(() => {
            const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

            if (isMobile) {
              // stacked layout for small screens
              return (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {/* Location Box (stacked) */}
              <div
                className="hero-input location-box"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  width: "100%",
                }}
              >
                <MapPin size={20} color="#0F7DD8" />
                <input
                  type="text"
                  placeholder="Vellampalli, Warangal"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  style={{ marginLeft: 10, flex: 1 }}
                />
              </div>

              {/* Search Box (stacked) */}
              <div
                className="hero-input search-box"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  placeholder="Search for Spa Salons"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ flex: 1 }}
                />
                <div style={{ display: "flex", gap: 8 }}>
                  <button className="mic-btn" aria-label="Start voice search">
                <Mic size={18} color="#0F7DD8" />
                  </button>
                  <button className="search-btn" aria-label="Search">
                <Search color="#fff" size={18} />
                  </button>
                </div>
              </div>
            </div>
              );
            }

            // default horizontal layout for larger screens
            return (
              <div
            className="hero-search-row"
            style={{ display: "flex", gap: 12, alignItems: "center", width: "100%" }}
              >
            {/* Location Box */}
            <div
              className="hero-input location-box"
              style={{ display: "flex", alignItems: "center" }}
            >
              <MapPin size={22} color="#0F7DD8" />
              <input
                type="text"
                placeholder="Vellampalli, Warangal"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            {/* Search Box */}
            <div
              className="hero-input search-box"
              style={{ display: "flex", alignItems: "center", flex: 1 }}
            >
              <input
                type="text"
                placeholder="Search for Spa Salons"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ flex: 1 }}
              />
              <button className="mic-btn" aria-label="Start voice search">
                <Mic size={20} color="#0F7DD8" />
              </button>
              <button className="search-btn" aria-label="Search">
                <Search color="#fff" size={20} />
              </button>
            </div>
              </div>
            );
          })()}
        </div>

        {/* ======= Cards Row ======= */}
        <div className="hero-cards">
          {/* Left big card */}
          <div className="hero-card image-card">
            <img src={heroMain} alt="Interior Designers" />
            <div className="card-overlay">
              
              {/* <button className="yellow-btn">Get Best Quotes</button> */}
            </div>
          </div>

          {/* Second column */}
          <div className="hero-card blue-card">
            <h3>B2B</h3>
            <p>Quick Quotes</p>
          </div>

          {/* Third column (small narrow one) */}
          <div className="hero-card blue-card"></div>

          {/* Fourth column */}
          <div className="hero-card blue-card">
            <h3>B2B</h3>
            <p>Quick Quotes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
