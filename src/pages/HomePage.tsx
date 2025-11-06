import React, { useState } from 'react';
import { MapPin, Mic, Search } from 'lucide-react';
import "../styles/about.css";
import logo from "../assets/logo.png";
import gallery1 from "../assets/food-banner.png"
import { Building2, Users2, UserRound, Link, IndianRupee } from "lucide-react";


const Home: React.FC = () => {
  const handleJoinNow = () => {
    // Add your navigation logic here
    window.location.href = '/signup';
  };
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");

   const stats = [
    { id: 1, icon: <Building2 size={40} />, label: "Cities", value: "50+" },
    { id: 2, icon: <Users2 size={40} />, label: "Groups", value: "100+" },
    { id: 3, icon: <UserRound size={40} />, label: "Members", value: "200+" },
    { id: 4, icon: <Link size={40} />, label: "Referral Links", value: "14000+" },
    { id: 5, icon: <IndianRupee size={40} />, label: "Turnover", value: "2.3cr+" },
  ];
  return (
    <div className="about-us-page">
       <h1 className="hero-title">
          Search across<span className="highlight">‘4.7 Crore+’</span> Businesses
        </h1>
         {/* ======= Search Row ======= */}

        <div className="hero-search">
          {/* Location Box */}
          <div className="hero-input location-box">
            <MapPin size={22} color="#0F7DD8" />
            <input
              type="text"
              placeholder="Vellampalli, Warangal"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Search Box */}
          <div className="hero-input search-box">
            <input
              type="text"
              placeholder="Search for Spa Salons"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="mic-btn">
              <Mic size={20} color="#0F7DD8" />
            </button>
            <button className="search-btn">
              <Search color="#fff" size={20} />
            </button>
          </div>
        </div>
      {/* Hero Banner Section */}
      <section className="hero-banner-section">
        <div className="hero-banner-container">
          <img 
            src={logo} 
            alt="We Konnects Community" 
            className="hero-banner-image"
          />
        </div>
      </section>

      {/* About Us Content Section */}
      <section className="about-content-section">
        <div className="about-us-badge">
          <h2>HOME</h2>
        </div>
        
        <h1 className="about-heading">Fast Growing</h1>
         <p className="about-description">Business Networking Organisation</p>
        
        <p className="about-description">
            Helping business to increase their clientilele and grow their business.
We Konnects strength lies in its diverse and
experienced team.        </p>

       
      </section>

      {/* === Stats Section === */}
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="gallery-grid">
          <div className="gallery-card">
            <img src={gallery1} alt="Gallery 1" />
            <div className="play-btn">▶</div>
          </div>
          <div className="gallery-card">
            <img src={gallery1} alt="Gallery 2" />
            <div className="play-btn">▶</div>
          </div>
        </div>
        
      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-heading">Start scaling your business with We Konnects</h2>
          <button className="cta-button" onClick={handleJoinNow}>
            JOIN NOW
          </button>
        </div>
      </section>
     
    </div>
  );
};

export default Home;