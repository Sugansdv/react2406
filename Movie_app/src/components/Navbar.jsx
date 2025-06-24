import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <NavLink className="navbar-brand" to="/">🎬 MovieSearchApp</NavLink>
      <div className="ms-auto d-flex align-items-center gap-3">
        <NavLink className="nav-link text-white" to="/">Home</NavLink>
        <NavLink className="nav-link text-white" to="/favorites">Favorites</NavLink>
        <button
          className="btn btn-outline-light btn-sm"
          onClick={() => setDarkMode(prev => !prev)}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;