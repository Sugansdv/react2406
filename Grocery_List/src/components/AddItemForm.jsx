import React, { useState } from 'react';

const AddItemForm = ({ onAdd, darkMode }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState('pcs');

  const unitOptions = [
    { value: 'pcs', label: 'pcs' },
    { value: 'kg', label: 'kg' },
    { value: 'lt', label: 'lt' },
    { value: 'g', label: 'g' },
    { value: 'ml', label: 'ml' },
    { value: 'box', label: 'box' },
    { value: 'pack', label: 'pack' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd({ 
      name, 
      quantity: parseInt(quantity),
      unit 
    });
    setName('');
    setQuantity(1);
    setUnit('pcs');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="row g-2 align-items-end">
        <div className="col-md-5">
          <label htmlFor="itemName" className={`form-label ${darkMode ? 'text-light' : ''}`}>Item name</label>
          <input
            id="itemName"
            type="text"
            className={`form-control ${darkMode ? 'bg-dark text-light' : ''}`}
            placeholder="Enter item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="itemQuantity" className={`form-label ${darkMode ? 'text-light' : ''}`}>Quantity</label>
          <input
            id="itemQuantity"
            type="number"
            className={`form-control ${darkMode ? 'bg-dark text-light' : ''}`}
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="itemUnit" className={`form-label ${darkMode ? 'text-light' : ''}`}>Unit</label>
          <select
            id="itemUnit"
            className={`form-select ${darkMode ? 'bg-dark text-light' : ''}`}
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          >
            {unitOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-2">
          <button type="submit" className={`btn ${darkMode ? 'btn-light' : 'btn-primary'} w-100`}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddItemForm;