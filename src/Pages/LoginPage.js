import React from "react";
import "./Login.css";
import LoginImage from "../Assets/Login.png";
import signUp from "../Pages/SignUpPage"

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="overlay"></div>
      <div className="login-form-container" style={{right:"100px"}}>
        <h2 className="form-title">Welcome Back 👋</h2>
        <p className="form-subtitle">
          Today is a new day. It's your day. You shape it.
          Sign in to start managing your projects.
        </p>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Example@email.com" className="form-input" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="At least 8 characters" className="form-input" />
          </div>
          <button type="submit" className="login-button">Login</button>
          <p className="signup-link">
            Dont have an account? <a href="/signUp">Sign up</a>

          </p>
        </form>
      </div>

    </div>
  );
};

export default LoginPage;

