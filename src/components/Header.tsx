import { useState } from "react";
import logo from "../assets/logo.png";

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6h18v12H3V6zm9 6L3 7.5V6l9 6 9-6v1.5L12 12z" fill="#1777cc"/>
    </svg>
  );
}
function IconMegaphone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 10v4a2 2 0 0 0 2 2h2l3 4v-6l10 3V7L10 10V4L7 8H5a2 2 0 0 0-2 2z" fill="#1777cc"/>
    </svg>
  );
}
function IconGrowth() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 20h16v-2H4v2zM6 10h3v6H6v-6zm5-4h3v10h-3V6zm5 3h3v7h-3V9z" fill="#1777cc"/>
    </svg>
  );
}
function IconBell() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2zm6-6V11a6 6 0 0 0-5-5.91V4a1 1 0 0 0-2 0v1.09A6 6 0 0 0 6 11v5l-2 2v1h16v-1l-2-2z" fill="#1777cc"/>
    </svg>
  );
}

export default function Header(){
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        {/* Logo */}
        <a className="header-logo" href="/" aria-label="Home">
          <img src={logo} alt="We Konnects" />
        </a>

        {/* Desktop Nav (center) */}
        <nav className="header-nav" aria-label="Primary">
          <a className="nav-item nav-about" href="#about">About Us</a>

          <a className="nav-item nav-groups" href="#groups">Groups &amp; Network</a>

          <a className="nav-item nav-leads" href="#leads">
            <IconMail /> Leads
          </a>

          <a className="nav-item nav-advertise" href="#advertise">
            <IconMegaphone /> Advertise
          </a>

          <a className="nav-item nav-free" href="#free-listing">
            <span className="free-pill">BUSINESS</span>
            <IconGrowth /> Free Listing
          </a>

          <button className="notify-btn" aria-label="Notifications">
            <IconBell />
          </button>
        </nav>

        {/* CTA + Mobile Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a className="header-cta" href="#login">Login / Sign Up</a>

          {/* Mobile hamburger */}
          <button
            className="menu-toggle"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Mobile drawer */}
        <aside
          id="mobile-drawer"
          className={`menu-drawer ${open ? "open" : ""}`}
          aria-hidden={!open}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <img src={logo} alt="We Konnects" style={{ width: 120, height: "auto" }} />
            <button
              className="menu-toggle"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <a href="#about" onClick={() => setOpen(false)}>About Us</a>
          <a href="#groups" onClick={() => setOpen(false)}>Groups &amp; Network</a>
          <a href="#leads" onClick={() => setOpen(false)}><span style={{ marginRight: 8, display: "inline-flex" }}><IconMail/></span>Leads</a>
          <a href="#advertise" onClick={() => setOpen(false)}><span style={{ marginRight: 8, display: "inline-flex" }}><IconMegaphone/></span>Advertise</a>
          <a href="#free-listing" onClick={() => setOpen(false)} style={{ position: "relative" }}>
            <span className="free-pill">BUSINESS</span>
            <span style={{ marginRight: 8, display: "inline-flex" }}><IconGrowth/></span>Free Listing
          </a>

          <a href="#login" className="header-cta" style={{ marginTop: 10 }} onClick={() => setOpen(false)}>
            Login / Sign Up
          </a>
        </aside>
      </div>
    </header>
  );
}
