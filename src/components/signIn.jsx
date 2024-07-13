import React from "react";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="sign-in-container">
      <form className="sign-in-form">
        <h2>SIGN IN</h2>
        <label htmlFor="username">Username</label>
        <input type="email" id="username" placeholder="enter your email" required />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="enter your password" required />
        
        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        
        <button type="submit" className="sign-in-button">Sign In</button>
        
        <div className="additional-links">
          <a href="#" className="forgot-password">Forget Password ? Click Here</a>
          <a href="#" className="create-account">Don't Have An Account ? Create One</a>
          <Link to="/">homePage</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
