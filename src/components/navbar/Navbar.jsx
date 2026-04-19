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
import { allUsers } from "../../data";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser, logout } = useContext(AuthContext);

  const filteredUsers = allUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="navbar">
      {/* LEFT */}
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

        {/* SEARCH */}
        <div className="search" style={{ position: "relative" }}>
          <SearchOutlinedIcon />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {searchTerm && (
            <div
              className="search-dropdown"
              style={{
                position: "absolute",
                top: "45px",
                left: "0",
                backgroundColor: darkMode ? "#333" : "white",
                width: "250px",
                boxShadow: "0px 8px 16px rgba(0,0,0,0.2)",
                borderRadius: "8px",
                padding: "10px",
                zIndex: 999,
                color: darkMode ? "white" : "black",
              }}
            >
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <Link
                    to={`/profile/${user.id}`}
                    key={user.id}
                    onClick={() => setSearchTerm("")}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "8px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={user.img}
                        alt=""
                        style={{
                          width: "35px",
                          height: "35px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                      <span style={{ fontSize: "14px", fontWeight: "500" }}>
                        {user.name}
                      </span>
                    </div>
                  </Link>
                ))
              ) : (
                <span style={{ fontSize: "12px", color: "gray" }}>
                  No user found
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* RIGHT */}
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />

        {/* USER */}
        {currentUser && (
          <div className="user">
            <Link
              to={`/profile/${currentUser.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img src={currentUser.profilePic} alt="" />
              <span>{currentUser.name}</span>
            </Link>
          </div>
        )}

        {/* 🔥 LOGOUT BUTTON */}
        <button
          onClick={logout}
          style={{
            marginLeft: "10px",
            padding: "6px 12px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            backgroundColor: "#ff4d4f",
            color: "white",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;