// import React from "react";
// import "./layout.css";
// import { Search, Bell, MessageSquare, Settings } from "lucide-react";
// import logo from "../../assets/logo.png";

// const AdminHeader: React.FC = () => {
//   return (
//     <header className="admin-header">
//       <div className="header-left">
//         <img src={logo} alt="We Konnects" className="header-logo" />
//       </div>

//       <div className="header-center">
//         <div className="search-bar">
//           <input type="text" placeholder="Search here" />
//           <button className="search-btn">
//             <Search size={18} color="#fff" />
//           </button>
//         </div>
//         <div className="header-links">
//           <a href="#">About</a>
//           <a href="#">Tools</a>
//           <a href="#">Help</a>
//         </div>
//       </div>

//       <div className="header-right">
//         <div className="header-icons">
//           <Bell className="icon" />
//           <MessageSquare className="icon" />
//           <Settings className="icon" />
//         </div>

//         <div className="admin-profile">
//           <span>Hello, Harikrishna</span>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default AdminHeader;

import React from "react";
import "./layout.css";
import { Search, Bell, MessageSquare, Settings } from "lucide-react";

const AdminHeader: React.FC = () => {
  return (
    <header className="admin-header">
      {/* ===== CENTER SECTION: Search + Links ===== */}
      <div className="header-center">
        <div className="search-bar">
          <input type="text" placeholder="Search here..." />
          <button className="search-btn">
            <Search size={18} color="#fff" />
          </button>
        </div>

        <div className="header-links">
          <a href="#">About</a>
          <a href="#">Tools</a>
          <a href="#">Help</a>
        </div>
      </div>

      {/* ===== RIGHT SECTION: Icons + Profile ===== */}
      <div className="header-right">
        <div className="header-icons">
          <Bell className="icon" />
          <MessageSquare className="icon" />
          <Settings className="icon" />
        </div>

        <div className="admin-profile">
          <span>Hello, Harikrishna</span>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;

