import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <NavLink className="navbar-brand mx-auto" to="/">
        🧾 Markdown Live Previewer
      </NavLink>
    </nav>
  );
}

export default Navbar;
