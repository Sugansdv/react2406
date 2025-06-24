import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container justify-content-center">
        <NavLink className="navbar-brand text-center fs-3" to="/">
          ⏱️ TimerApp
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
