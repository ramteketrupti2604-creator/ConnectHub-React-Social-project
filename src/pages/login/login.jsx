import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // ✅ prevent page reload
    login();            // ✅ call login from context
    navigate("/");      // ✅ redirect to home
  };

  return (
    <div className="login">
      <div className="card">
        
        {/* LEFT SIDE */}
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Welcome to the future of social networking. Connect with friends,
            share your unique moments, and explore endless possibilities.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="right">
          <h1>Login</h1>

          {/* ✅ Form submit handling */}
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />

            {/* ✅ button type submit */}
            <button type="submit">Login</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;