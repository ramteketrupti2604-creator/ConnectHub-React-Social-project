import React, { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";

import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";

import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";

import { AuthContext } from "./context/authContext";
import { DarkModeContext } from "./context/darkModeContext";

import "./style.scss";

function App() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  // 🔥 FIXED LAYOUT
  const Layout = () => (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar />

      <div
        className="mainContainer"
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "100%",
          overflowX: "hidden",
        }}
      >
        {/* LEFT SIDEBAR */}
        <div style={{ flexShrink: 0 }}>
          <LeftBar />
        </div>

        {/* MAIN CONTENT */}
        <div
          className="contentContainer"
          style={{
            flex: 6,
            minWidth: 0,
            width: "100%",
            overflowX: "hidden",
          }}
        >
          <Outlet />
        </div>

        {/* RIGHT SIDEBAR */}
        <div style={{ flexShrink: 0 }}>
          <RightBar />
        </div>
      </div>
    </div>
  );

  // 🔐 PROTECTED ROUTE
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) return <Navigate to="/login" />;
    return children;
  };

  // 🔓 PUBLIC ROUTE
  const PublicRoute = ({ children }) => {
    if (currentUser) return <Navigate to="/" />;
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/profile/:id", element: <Profile /> },
      ],
    },
    {
      path: "/login",
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      ),
    },
    {
      path: "/register",
      element: (
        <PublicRoute>
          <Register />
        </PublicRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;