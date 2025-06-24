import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ModalPrompt({ show }) {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate('/login');
  };

  return (
    <>
      {show && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Welcome</h5>
              </div>
              <div className="modal-body">
                <p>Please login to continue.</p>
              </div>
              <div className="modal-footer">
                <button onClick={handleGoToLogin} className="btn btn-primary">Go to Login</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
