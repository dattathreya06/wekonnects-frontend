// import { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";

// // Reusable ScrollLink for in-page navigation
// function ScrollLink({
//   to,
//   children,
//   className,
//   onClick,
//   ...props
// }: {
//   to: string;
//   children: React.ReactNode;
//   className?: string;
//   onClick?: () => void;
// }) {
//   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     e.preventDefault();
//     const element = document.querySelector(to);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     onClick?.();
//   };

//   return (
//     <Link to={to} className={className} onClick={handleClick} {...props}>
//       {children}
//     </Link>
//   );
// }

// // SVG Icons
// function IconMail() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
//       <path d="M3 6h18v12H3V6zm9 6L3 7.5V6l9 6 9-6v1.5L12 12z" fill="#1777cc" />
//     </svg>
//   );
// }
// function IconMegaphone() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
//       <path
//         d="M3 10v4a2 2 0 0 0 2 2h2l3 4v-6l10 3V7L10 10V4L7 8H5a2 2 0 0 0-2 2z"
//         fill="#1777cc"
//       />
//     </svg>
//   );
// }
// function IconGrowth() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
//       <path
//         d="M4 20h16v-2H4v2zM6 10h3v6H6v-6zm5-4h3v10h-3V6zm5 3h3v7h-3V9z"
//         fill="#1777cc"
//       />
//     </svg>
//   );
// }
// function IconBell() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
//       <path
//         d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2zm6-6V11a6 6 0 0 0-5-5.91V4a1 1 0 0 0-2 0v1.09A6 6 0 0 0 6 11v5l-2 2v1h16v-1l-2-2z"
//         fill="#1777cc"
//       />
//     </svg>
//   );
// }

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="site-header" role="banner">
//       <div className="container header-inner">
//         {/* Logo */}
//         <Link className="header-logo" to="/" aria-label="Home">
//           <img src={logo} alt="We Konnects" />
//         </Link>


//         {/* Desktop Navigation */}
//         <nav className="header-nav" aria-label="Primary">
//                     <Link className="header-tagline" to="/home">
//          Home
//         </Link>
//           <Link className="nav-item nav-about" to="/about">
//             About Us
//           </Link>
//           <Link className="nav-item nav-about" to="/leadership">
//             Leadership
//           </Link>
//           <Link className="nav-item nav-about" to="/contact">
//            Contact
//           </Link>

//           {/* <ScrollLink to="#groups" className="nav-item nav-groups">
//             Groups & Network
//           </ScrollLink>

//           <ScrollLink to="#leads" className="nav-item nav-leads">
//             <IconMail /> Leads
//           </ScrollLink> 

//           <ScrollLink to="#advertise" className="nav-item nav-advertise">
//             <IconMegaphone /> Advertise
//           </ScrollLink>*/}
//           <Link className="nav-item nav-about" to="/businesscategories">
//            business
//           </Link>
//           <ScrollLink
//             to="#free-listing"
//             className="nav-item nav-free"
           
//           >
//             <span className="free-pill">BUSINESS</span>
//             <IconGrowth /> Free Listing
//           </ScrollLink>

//           <button className="notify-btn" aria-label="Notifications">
//             <IconBell />
//           </button>
//         </nav>

//         {/* CTA + Mobile Toggle */}
//         <div className="header-right">
//           <Link className="header-cta" to="/login">
//             Login / Sign Up
//           </Link>

//           <button
//             className="menu-toggle"
//             aria-label="Open menu"
//             aria-expanded={open}
//             aria-controls="mobile-drawer"
//             onClick={() => setOpen(true)}
//           >
//             <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
//               <path
//                 d="M3 6h18M3 12h18M3 18h18"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Drawer */}
//         <aside
//           id="mobile-drawer"
//           className={`menu-drawer ${open ? "open" : ""}`}
//           aria-hidden={!open}
//         >
//           <div className="drawer-header">
//             <img src={logo} alt="We Konnects" width={120} />
//             <button
//               className="close-btn"
//               aria-label="Close menu"
//               onClick={() => setOpen(false)}
//             >
//               <svg width="20" height="20" viewBox="0 0 24 24">
//                 <path
//                   d="M6 6l12 12M18 6l-12 12"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </button>
//           </div>

//           <div className="drawer-links">
//             <Link to="/about" onClick={() => setOpen(false)}>
//               About Us
//             </Link>

//             <ScrollLink to="#groups" onClick={() => setOpen(false)}>
//               Groups & Network
//             </ScrollLink>

//             <ScrollLink to="#leads" onClick={() => setOpen(false)}>
//               <span style={{ marginRight: 8, display: "inline-flex" }}>
//                 <IconMail />
//               </span>
//               Leads
//             </ScrollLink>

//             <ScrollLink to="#advertise" onClick={() => setOpen(false)}>
//               <span style={{ marginRight: 8, display: "inline-flex" }}>
//                 <IconMegaphone />
//               </span>
//               Advertise
//             </ScrollLink>

//             <ScrollLink
//               to="#free-listing"
//               onClick={() => setOpen(false)}
              
//             >
//               <span className="free-pill">BUSINESS</span>
//               <span style={{ marginRight: 8, display: "inline-flex" }}>
//                 <IconGrowth />
//               </span>
//               Free Listing
//             </ScrollLink>

//             <Link
//               to="/login"
//               className="header-cta"
//               style={{ marginTop: 16, display: "inline-block" }}
//               onClick={() => setOpen(false)}
//             >
//               Login / Sign Up
//             </Link>
//           </div>
//         </aside>
//       </div>
//     </header>
//   );
// }

/* ===== Header.tsx (updated) ===== */
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

/* ---------- ScrollLink (unchanged) ---------- */
function ScrollLink({
  to,
  children,
  className,
  onClick,
  ...props
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(to);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    onClick?.();
  };
  return (
    <Link to={to} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

/* ---------- Icons (unchanged) ---------- */


function IconGrowth() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 20h16v-2H4v2zM6 10h3v6H6v-6zm5-4h3v10h-3V6zm5 3h3v7h-3V9z"
        fill="#1777cc"
      />
    </svg>
  );
}
function IconBell() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2zm6-6V11a6 6 0 0 0-5-5.91V4a1 1 0 0 0-2 0v1.09A6 6 0 0 0 6 11v5l-2 2v1h16v-1l-2-2z"
        fill="#1777cc"
      />
    </svg>
  );
}

/* ---------- Main Header ---------- */
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        {/* LOGO */}
        <Link className="header-logo" to="/" aria-label="Home">
          <img src={logo} alt="We Konnects" />
        </Link>

        {/* DESKTOP / TABLET NAVIGATION */}
        <nav className="header-nav" aria-label="Primary">
          <Link className="header-tagline" to="/home">
            Home
          </Link>
          <Link className="nav-item nav-about" to="/about">
            About Us
          </Link>
          <Link className="nav-item nav-about" to="/leadership">
            Leadership
          </Link>
          <Link className="nav-item nav-about" to="/contact">
            Contact
          </Link>
          <Link className="nav-item nav-about" to="/businesscategories">
            Business
          </Link>

          <ScrollLink to="#free-listing" className="nav-item nav-free">
            <span className="free-pill">BUSINESS</span>
            <IconGrowth /> Free Listing
          </ScrollLink>

          <button className="notify-btn" aria-label="Notifications">
            <IconBell />
          </button>
        </nav>

        {/* CTA + HAMBURGER (always visible on desktop) */}
        <div className="header-right">
          <Link className="header-cta desktop-cta" to="/login">
            Login / Sign Up
          </Link>

          {/* Hamburger – hidden on desktop, visible on mobile */}
          <button
            className="menu-toggle"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* MOBILE DRAWER */}
        <aside
          id="mobile-drawer"
          className={`menu-drawer ${open ? "open" : ""}`}
          aria-hidden={!open}
        >
          <div className="drawer-header">
            <img src={logo} alt="We Konnects" width={120} />
            <button
              className="close-btn"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  d="M6 6l12 12M18 6l-12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="drawer-links">
            <Link to="/home" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setOpen(false)}>
              About Us
            </Link>
            <Link to="/leadership" onClick={() => setOpen(false)}>
              Leadership
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link to="/businesscategories" onClick={() => setOpen(false)}>
              Business
            </Link>

            <ScrollLink to="#free-listing" onClick={() => setOpen(false)}>
              <span className="free-pill">BUSINESS</span>
              <span style={{ marginRight: 8, display: "inline-flex" }}>
                <IconGrowth />
              </span>
              Free Listing
            </ScrollLink>

            {/* CTA inside drawer */}
            <Link
              to="/login"
              className="header-cta mobile-cta"
              onClick={() => setOpen(false)}
            >
              Login / Sign Up
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
}