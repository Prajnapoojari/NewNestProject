import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../Assets/SignUp.png';
import "./SignUp.css";

function SignupPage() {
  return (
    <div
      className="signup-container d-flex justify-content-center align-items-center">
      {/* Content Container */}
      <div className="overlay"></div>
      <div className="signup-form-container ">
        <div className="card-body p-4">
          <h2 className="text-center mb-4 text-white">Create An Account</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label text-white">Name</label>
              <input
                type="text"
                className="form-control bg-light bg-opacity-25 text-white"
                id="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label text-white">Last Name</label>
              <input
                type="text"
                className="form-control bg-light bg-opacity-25 text-white"
                id="lastName"
                placeholder="Last Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-white">Email</label>
              <input
                type="email"
                className="form-control bg-light bg-opacity-25 text-white"
                id="email"
                placeholder="Example@email.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-white">Password</label>
              <input
                type="password"
                className="form-control bg-light bg-opacity-25 text-white"
                id="password"
                placeholder="At least 8 characters"
              />
            </div>
            <div className="d-grid gap-2 mt-4">
              <button className="btn btn-primary" type="button">SignUp</button>
            </div>
            <div className="text-center mt-3">
              <p className="text-white">
                Already have an account?
                <a href="/Login" className="text-white ms-1">Log in</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
