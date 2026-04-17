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

  // ✅ Layout
  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />

        <div className="mainContainer">
          {/* Left Sidebar */}
          <LeftBar />

          {/* Main Content */}
          <div className="contentContainer">
            <Outlet />
          </div>

          {/* Right Sidebar */}
          <RightBar />
        </div>
      </div>
    );
  };

  // ✅ Protected Route
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  // ✅ Prevent logged-in user from seeing login/register again
  const PublicRoute = ({ children }) => {
    if (currentUser) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  // ✅ Router
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
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