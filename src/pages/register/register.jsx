import React from "react";
import "./register.scss";
import { Link } from "react-router-dom"; // Ye line add karein

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>ConnectHub</h1>
          <p>
           Join the largest community of creators 
           and friends. 
           Start your journey today, 
           share your story with the world, 
           and build connections that last a lifetime.
          </p>
          <span>Do you have an account?</span>
          {/* Yahan Link add karein taaki Register se Login par ja sakein */}
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            {/* Abhi ke liye yahan bhi Link laga sakte hain testing ke liye */}
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;