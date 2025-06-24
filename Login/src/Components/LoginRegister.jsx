import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function LoginRegister({ onLogin, onHideModal }) {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const initialForm = query.get('view') === 'register';

  const [showRegister, setShowRegister] = useState(initialForm);
  const [form, setForm] = useState({});
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    onHideModal();
  }, [onHideModal]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleShow = () => {
    setShowPass(!showPass);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const existingUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (!form.name || !form.email || !form.password || form.password !== form.confirm) {
      alert('Please fill all fields and make sure passwords match');
      return;
    }

    if (existingUser && existingUser.email === form.email) {
      alert('Account already registered. Please login.');
      setShowRegister(false);
      return;
    }

    localStorage.setItem('registeredUser', JSON.stringify(form));
    onLogin(form);
    navigate('/');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const regUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (regUser && regUser.email === form.email && regUser.password === form.password) {
      onLogin(regUser);
      navigate('/');
    } else {
      alert('Invalid credentials or user not registered');
    }
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6">
          {!showRegister && (
            <>
              <h4>Login</h4>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <div className="input-group">
                    <input
                      name="password"
                      type={showPass ? 'text' : 'password'}
                      className="form-control"
                      required
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={toggleShow}
                    >
                      {showPass ? 'hide' : 'view'}
                    </button>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </>
          )}
        </div>

        <div className="col-md-6">
          {showRegister ? (
            <>
              <h4>Register</h4>
              <form onSubmit={handleRegister}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    name="name"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </div>

                 <div className="mb-3">
                  <label className="form-label">Password</label>
                  <div className="input-group">
                    <input
                      name="password"
                      type={showPass ? 'text' : 'password'}
                      className="form-control"
                      required
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={toggleShow}
                    >
                      {showPass ? 'hide' : 'view'}
                    </button>
                  </div>
                </div>

               <div className="mb-3">
                  <label className="form-label">Password</label>
                  <div className="input-group">
                    <input
                      name="confirm"
                      type={showPass ? 'text' : 'password'}
                      className="form-control"
                      required
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={toggleShow}
                    >
                      {showPass ? 'hide' : 'view'}
                    </button>
                  </div>
                </div>

                <button type="submit" className="btn btn-success">Register</button>
              </form>
            </>
          ) : (
            <div className="text-center mt-5">
              <p>New user?</p>
              <button
                className="btn btn-secondary"
                onClick={() => setShowRegister(true)}
              >
                Register Here
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
