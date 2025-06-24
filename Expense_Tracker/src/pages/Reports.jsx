import React from 'react';

const Reports = ({ darkMode }) => {
  return (
    <div className={`container mt-4 ${darkMode ? 'text-light' : ''}`}>
      <h2 className="mb-4">Expense Reports</h2>
      <div className={`card ${darkMode ? 'bg-dark' : ''}`}>
        <div className="card-body">
          <p>Reports feature coming soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Reports;