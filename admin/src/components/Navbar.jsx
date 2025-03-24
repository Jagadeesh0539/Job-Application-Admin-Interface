import { useState } from "react";
import { Link } from "react-router-dom";
import CreateJobModal from "./JobFormModal";
import "../styles.css";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="navbar">
      <ul className="nav-links">
        <li><img src="/logo.jpg" alt="Job Portal Logo" className="logo-img" /></li>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/find-jobs" className="nav-link">Find Jobs</Link></li>
          <li><Link to="/find-talents" className="nav-link">Find Talents</Link></li>
          <li><Link to="/about-us" className="nav-link">About Us</Link></li>
          <li><Link to="/testimonials" className="nav-link">Testimonials</Link></li>
          <li>
            <button className="create-job-btn" onClick={() => setShowModal(true)}>Create Jobs</button>
          </li>
        </ul>
      </nav>
      {showModal && <CreateJobModal show={showModal} setShowModal={setShowModal} />}
    </>
  );
};

export default Navbar;
