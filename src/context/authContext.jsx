import React, { createContext, useEffect, useState } from "react";
import MyProfilePic from "../assets/p1.jpeg";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  
  const [currentUser, setCurrentUser] = useState(null);

  const login = () => {
    setCurrentUser({
      id: 1,
      name: "Trupti Ramteke",
      profilePic: MyProfilePic,
    });
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};