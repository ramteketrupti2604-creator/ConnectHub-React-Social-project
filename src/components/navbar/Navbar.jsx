import React, { useState, useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { allUsers } from "../../data"; // Central data file se users mangwaye

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  // SEARCH LOGIC: Type karte hi 'allUsers' mein se naam filter honge
  const filteredUsers = allUsers.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>ConnectHub</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <DarkModeOutlinedIcon onClick={toggle} style={{ cursor: "pointer" }} />
        ) : (
          <WbSunnyOutlinedIcon onClick={toggle} style={{ cursor: "pointer" }} />
        )}
        <GridViewOutlinedIcon />
        
        {/* SEARCH BOX SECTION */}
        <div className="search" style={{ position: "relative" }}>
          <SearchOutlinedIcon />
          <input 
            type="text" 
            placeholder="Search users..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          
          {/* Search Dropdown: Jab kuch type karenge tabhi dikhega */}
          {searchTerm && (
            <div className="search-dropdown" style={{
              position: "absolute", 
              top: "45px", 
              left: "0", 
              backgroundColor: darkMode ? "#333" : "white", // Dark mode support
              width: "250px", 
              boxShadow: "0px 8px 16px rgba(0,0,0,0.2)", 
              borderRadius: "8px",
              padding: "10px", 
              zIndex: 999, 
              color: darkMode ? "white" : "black"
            }}>
              {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                  <Link 
                    to={`/profile/${user.id}`} 
                    key={user.id} 
                    onClick={() => setSearchTerm("")} // Click karte hi dropdown band
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "10px", 
                      padding: "8px",
                      borderRadius: "5px",
                      cursor: "pointer"
                    }}>
                      <img 
                        src={user.img} 
                        alt="" 
                        style={{ width: "35px", height: "35px", borderRadius: "50%", objectFit: "cover" }} 
                      />
                      <span style={{ fontSize: "14px", fontWeight: "500" }}>{user.name}</span>
                    </div>
                  </Link>
                ))
              ) : (
                <span style={{ fontSize: "12px", color: "gray", padding: "5px" }}>No user found</span>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <Link 
            to={`/profile/${currentUser.id}`} 
            style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: "10px" }}
          >
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;