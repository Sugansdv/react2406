import React from 'react';

const ExpenseFilter = ({ filter, setFilter, darkMode }) => {
  const filters = ['all', 'this week', 'this month', 'this year'];

  return (
    <div className="mb-3">
      <div className="btn-group" role="group">
        {filters.map(f => (
          <button
            key={f}
            type="button"
            className={`btn ${
              filter === f 
                ? darkMode ? 'btn-light' : 'btn-primary' 
                : darkMode ? 'btn-outline-light' : 'btn-outline-primary'
            }`}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExpenseFilter;