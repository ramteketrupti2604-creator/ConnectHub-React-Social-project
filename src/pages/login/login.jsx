import React from "react";
import { useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
const { login } = useContext(AuthContext);
const navigate = useNavigate();

const handleLogin = (e) => {
    e.preventDefault();
    login();
    navigate("/");
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
           Welcome to the future of social networking. Connect with friends, 
           share your unique moments, 
           and explore a world of endless possibilities.
          </p>
          <span>Don't you have an account?</span>
          <Link to ="/register">
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;