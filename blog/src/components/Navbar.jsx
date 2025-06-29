import React from 'react';
import { Link } from 'react-router-dom';
import { FaBlog } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <FaBlog className="me-2 fs-3 fw-bold" />
          Blog Platform
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fs-4 fw-bold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-4 fw-bold" to="/add">Add Post</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;