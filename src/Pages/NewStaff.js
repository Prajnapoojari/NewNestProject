import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from "react-icons/md";
import NewStaffImage from "../Assets/NewStaff.jpeg";

const NewStaff = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center bg-gradient bg-dark text-light px-3">
      <div className="row w-100 d-flex justify-content-center align-items-center flex-md-row flex-column">
        {/* Left Section - Image & Info */}
        <aside className="col-md-5 d-flex flex-column justify-content-center align-items-center p-4 text-center">
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden" style={{ maxWidth: "450px" }}>
            <img
              src={NewStaffImage}
              alt="Join Our Team"
              className="img-fluid rounded-top"
              style={{ height: "280px", objectFit: "cover" }}
            />
            <div className="card-body bg-light text-dark p-4 rounded-bottom">
              <h3 className="fw-bold text-primary">Join Our Compassionate Team</h3>
              <p className="fs-5">Make a difference, spread love, and create change.</p>
              <hr className="border-primary" />
              <p><MdLocationOn className="text-primary fs-4" /> Bengaluru, Karnataka
                  <MdPhone className="text-primary fs-4" /> +91 7339552119</p>
              <p><MdEmail className="text-primary fs-4" /> charity@email.net
              <MdAccessTime className="text-primary fs-4" /> Mon-Fri: 8:00am - 6:00pm</p>
              <div className="d-flex justify-content-center gap-3 mt-3">
                <a href="#" className="text-primary fs-4"><FaFacebook /></a>
                <a href="#" className="text-primary fs-4"><FaTwitter /></a>
                <a href="#" className="text-primary fs-4"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Section - Form */}
        <main className="col-md-6 d-flex flex-column align-items-center justify-content-center p-5">
          <h2 className="text-primary fw-bold text-center mb-4">Become a Part of Our Family</h2>
          <div className="glassmorphism p-4 rounded-4 w-100 shadow-lg" style={{ maxWidth: "500px", background: "rgba(255, 255, 255, 0.15)", backdropFilter: "blur(12px)", border: "2px solid rgba(255, 255, 255, 0.2)" }}>
            <form className="row g-3">
              <div className="col-12">
                <label className="form-label fw-bold text-light">Full Name</label>
                <input type="text" className="form-control rounded-3 shadow-sm" placeholder="Enter Full Name" />
              </div>
              <div className="col-12">
                <label className="form-label fw-bold text-light">Age</label>
                <input type="number" className="form-control rounded-3 shadow-sm" placeholder="Enter Age" min="0" />
              </div>
              <div className="col-12">
                <label className="form-label fw-bold text-light">Email</label>
                <input type="email" className="form-control rounded-3 shadow-sm" placeholder="Enter Email" />
              </div>
              <div className="col-12">
                <label className="form-label fw-bold text-light">Select Role</label>
                <select className="form-select rounded-3 shadow-sm">
                  <option>Select Role</option>
                  <option>Admin</option>
                  <option>Manager</option>
                  <option>Volunteer</option>
                </select>
              </div>
              <div className="col-12">
                <label className="form-label fw-bold text-light">Phone Number</label>
                <input type="tel" className="form-control rounded-3 shadow-sm" placeholder="Enter Phone Number" />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary w-100 fw-bold rounded-3 shadow-lg" style={{ fontSize: "1.1rem" }}>
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NewStaff;