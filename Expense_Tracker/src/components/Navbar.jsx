import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-primary'}`}>
      <div className="container">
        <NavLink className="navbar-brand me-auto fs-3 fw-bold" to="/">Expense Tracker</NavLink>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="me-auto"></div>
          
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link fs-3 fw-bold me-5" to="/">Dashboard</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/reports">Reports</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/settings">Settings</NavLink>
            </li> */}
          </ul>
          
          <div className="form-check form-switch ms-3">
            <input
              className="form-check-input"
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <label className="form-check-label">
              {darkMode ? '🌙 Dark' : '☀️ Light'}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;