import React, { createContext, useState } from "react";
import MyProfilePic from "../assets/p1.jpeg";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  // ✅ Load user from localStorage (important for refresh)
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // ✅ Login function (dummy user for now)
  const login = () => {
    const userData = {
      id: 1,
      name: "Trupti Ramteke",
      profilePic: MyProfilePic,
    };

    setCurrentUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // ✅ Logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};