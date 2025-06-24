import React, { useState, useEffect } from 'react';
import GroceryItem from './GroceryItem';
import AddItemForm from './AddItemForm';

const GroceryList = ({ darkMode }) => {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('groceryItems');
    return savedItems ? JSON.parse(savedItems) : [
      { id: 1, name: 'Milk', quantity: 1, unit: 'lt', completed: false },
      { id: 2, name: 'Eggs', quantity: 12, unit: 'pcs', completed: false },
      { id: 3, name: 'Flour', quantity: 2, unit: 'kg', completed: false }
    ];
  });

  const [filter, setFilter] = useState('all'); // 'all', 'purchased', 'notPurchased'

  useEffect(() => {
    localStorage.setItem('groceryItems', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems([...items, { ...item, id: Date.now(), completed: false }]);
  };

  const toggleComplete = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const filteredItems = items.filter(item => {
    if (filter === 'purchased') return item.completed;
    if (filter === 'notPurchased') return !item.completed;
    return true; // 'all'
  });

  return (
    <div className={`container mt-4 ${darkMode ? 'text-light' : ''}`}>
      <h2 className="mb-4">My Grocery List</h2>
      
      <div className="row mb-3">
        <div className="col-md-6">
          <AddItemForm onAdd={addItem} darkMode={darkMode} />
        </div>
        <div className="col-md-6">
          <div className="btn-group float-end" role="group">
            <button
              type="button"
              className={`btn ${filter === 'all' ? 'btn-primary' : darkMode ? 'btn-outline-light' : 'btn-outline-primary'}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              type="button"
              className={`btn ${filter === 'notPurchased' ? 'btn-primary' : darkMode ? 'btn-outline-light' : 'btn-outline-primary'}`}
              onClick={() => setFilter('notPurchased')}
            >
              To Buy
            </button>
            <button
              type="button"
              className={`btn ${filter === 'purchased' ? 'btn-primary' : darkMode ? 'btn-outline-light' : 'btn-outline-primary'}`}
              onClick={() => setFilter('purchased')}
            >
              Purchased
            </button>
          </div>
        </div>
      </div>

      <ul className="list-group mt-3">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <GroceryItem 
              key={item.id} 
              item={item} 
              onToggleComplete={toggleComplete}
              onDelete={deleteItem}
              darkMode={darkMode}
            />
          ))
        ) : (
          <li className={`list-group-item ${darkMode ? 'bg-secondary text-light' : ''}`}>
            {filter === 'all' 
              ? 'Your grocery list is empty' 
              : filter === 'purchased' 
                ? 'No purchased items' 
                : 'No items to buy'}
          </li>
        )}
      </ul>

      {filter !== 'all' && (
        <div className="mt-2 text-muted">
          Showing {filteredItems.length} {filter === 'purchased' ? 'purchased' : 'to buy'} items
          {' '}({items.length} total)
        </div>
      )}
    </div>
  );
};

export default GroceryList;