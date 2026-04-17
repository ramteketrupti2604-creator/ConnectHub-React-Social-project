import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // ✅ Dummy register (no backend)
    alert("Registered successfully!");

    // 👉 Redirect to login
    navigate("/login");
  };

  return (
    <div className="register">
      <div className="card">
        
        {/* LEFT */}
        <div className="left">
          <h1>ConnectHub.</h1>
          <p>
            Join the community and start sharing your moments with the world.
          </p>
          <span>Already have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>

        {/* RIGHT */}
        <div className="right">
          <h1>Register</h1>

          <form onSubmit={handleRegister}>
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;