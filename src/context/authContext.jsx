import React, { createContext, useState } from "react";
import MyProfilePic from "../assets/p1.jpeg";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  // 🔴 No auto login (always start null)
  const [currentUser, setCurrentUser] = useState(null);

  // 🔐 LOGIN FUNCTION
  const login = () => {
    const userData = {
      id: 1,
      name: "Trupti Ramteke",
      profilePic: MyProfilePic,
    };

    setCurrentUser(userData);
  };

  // 🔓 LOGOUT (optional, not required)
  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};