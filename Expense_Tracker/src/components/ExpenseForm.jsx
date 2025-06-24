import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense, darkMode }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('food');

  const categories = [
    'food', 'transport', 'housing', 'entertainment', 
    'utilities', 'health', 'education', 'other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !amount || !date) return;
    
    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      date: new Date(date).toISOString().split('T')[0],
      category
    };
    
    onAddExpense(newExpense);
    setTitle('');
    setAmount('');
    setDate('');
    setCategory('food');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row g-3">
        <div className="col-md-4">
          <label className={`form-label ${darkMode ? 'text-light' : ''}`}>Title</label>
          <input
            type="text"
            className={`form-control ${darkMode ? 'bg-dark text-light' : ''}`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div className="col-md-3">
          <label className={`form-label ${darkMode ? 'text-light' : ''}`}>Amount</label>
          <div className="input-group">
            <span className={`input-group-text ${darkMode ? 'bg-secondary text-light' : ''}`}>₹</span>
            <input
              type="number"
              className={`form-control ${darkMode ? 'bg-dark text-light' : ''}`}
              min="0.01"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div className="col-md-3">
          <label className={`form-label ${darkMode ? 'text-light' : ''}`}>Date</label>
          <input
            type="date"
            className={`form-control ${darkMode ? 'bg-dark text-light' : ''}`}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        
        <div className="col-md-2">
          <label className={`form-label ${darkMode ? 'text-light' : ''}`}>Category</label>
          <select
            className={`form-select ${darkMode ? 'bg-dark text-light' : ''}`}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="mt-3">
        <button 
          type="submit" 
          className={`btn ${darkMode ? 'btn-light' : 'btn-primary'}`}
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;