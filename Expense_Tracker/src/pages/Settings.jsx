import React from 'react';

const Settings = ({ darkMode }) => {
  return (
    <div className={`container mt-4 ${darkMode ? 'text-light' : ''}`}>
      <h2 className="mb-4">Settings</h2>
      <div className={`card ${darkMode ? 'bg-dark' : ''}`}>
        <div className="card-body">
          <p>Settings feature coming soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;