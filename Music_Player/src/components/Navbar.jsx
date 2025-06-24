import React from 'react';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <span className="navbar-brand">🎶 Music Player</span>
      <button
        className="btn btn-outline-light btn-sm"
        onClick={() => setDarkMode(prev => !prev)}
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </nav>
  );
}

export default Navbar;
