import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-success'}`}>
      <div className="container">
        <NavLink className="navbar-brand me-auto fs-3" to="/">Grocery List</NavLink>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="me-auto"></div>
          
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink 
                className="nav-link fs-5" 
                to="/"
                style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link fs-5" 
                to="/about"
                style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
               className="nav-link fs-5" 
                to="/contact"
                style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
                Contact
              </NavLink>
            </li>
          </ul>
          
          <div className="form-check form-switch ms-3">
            <input
              className="form-check-input fs-5"
              type="checkbox"
              id="darkModeSwitch"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <label className="form-check-label" htmlFor="darkModeSwitch">
              {darkMode ? '🌙 Dark' : '☀️ Light'}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;