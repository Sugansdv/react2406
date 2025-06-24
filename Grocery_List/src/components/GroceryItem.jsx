import React from 'react';

const GroceryItem = ({ item, onToggleComplete, onDelete, darkMode }) => {
  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${
      darkMode ? 'bg-secondary text-light' : ''
    } ${item.completed ? (darkMode ? 'bg-dark' : 'bg-light') : ''}`}>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={item.completed}
          onChange={() => onToggleComplete(item.id)}
        />
        <label 
          className={`form-check-label ${item.completed ? 'text-decoration-line-through text-muted' : ''}`}
          style={{ marginLeft: '10px' }}>
          {item.name} ({item.quantity} {item.unit})
        </label>
      </div>
      <button 
        className={`btn btn-sm ${darkMode ? 'btn-outline-light' : 'btn-outline-danger'}`}
        onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </li>
  );
};

export default GroceryItem;