import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import Contact from './Components/Contact';
import LoginRegister from './Components/LoginRegister';
import ModalPrompt from './Components/ModalPrompt';
import PrivateRoute from './Components/PrivateRoute';
import './App.css'; 

function App() {
  const [showModal, setShowModal] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) {
      setLoggedInUser(storedUser);
      setShowModal(false);
    }
  }, []);

  const handleLogin = (user) => {
    setLoggedInUser(user);
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    setShowModal(false);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem('loggedInUser');
    setShowModal(true);
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">ProductApp</NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
            <ul className="navbar-nav">
              {loggedInUser ? (
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    id="userDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hello, {loggedInUser.name}
                  </span>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                    <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <ModalPrompt show={showModal} />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <PrivateRoute user={loggedInUser} onDeny={() => setShowModal(true)}>
                <Products />
              </PrivateRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PrivateRoute user={loggedInUser} onDeny={() => setShowModal(true)}>
                <Contact />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <LoginRegister
                onLogin={handleLogin}
                onHideModal={() => setShowModal(false)}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
