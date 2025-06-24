import React, { useState, useEffect } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import ExpenseFilter from '../components/ExpenseFilter';
import { formatRupees } from '../../utils/currencyFormatter';

const Dashboard = ({ darkMode }) => {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (newExpense) => {
    setExpenses([newExpense, ...expenses]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const filteredExpenses = expenses.filter(expense => {
    const expenseDate = new Date(expense.date);
    const now = new Date();
    
    switch(filter) {
      case 'this week':
        const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
        return expenseDate >= startOfWeek;
      case 'this month':
        return expenseDate.getMonth() === now.getMonth() && 
               expenseDate.getFullYear() === now.getFullYear();
      case 'this year':
        return expenseDate.getFullYear() === now.getFullYear();
      default:
        return true;
    }
  });

  const totalExpenses = filteredExpenses.reduce(
    (sum, expense) => sum + expense.amount, 0
  );

  return (
    <div className={`container mt-4 ${darkMode ? 'text-light' : ''}`}>
      <h2 className="mb-4">Expense Dashboard</h2>
      
      <div className="row">
        <div className="col-lg-6">
          <div className={`card mb-4 ${darkMode ? 'bg-dark' : ''}`}>
            <div className="card-body">
              <h5 className="card-title">Add New Expense</h5>
              <ExpenseForm onAddExpense={addExpense} darkMode={darkMode} />
            </div>
          </div>
        </div>
        
        <div className="col-lg-6">
          <div className={`card mb-4 ${darkMode ? 'bg-dark' : ''}`}>
            <div className="card-body">
              <h5 className="card-title">Summary</h5>
              <h3 className={totalExpenses >= 0 ? 'text-success' : 'text-danger'}>
                {formatRupees(totalExpenses)}
              </h3>
              <p className="text-muted">
                {filteredExpenses.length} {filteredExpenses.length === 1 ? 'expense' : 'expenses'} 
                {' '}({expenses.length} total)
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`card ${darkMode ? 'bg-dark' : ''}`}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="card-title mb-0">Your Expenses</h5>
            <ExpenseFilter filter={filter} setFilter={setFilter} darkMode={darkMode} />
          </div>
          <ExpenseList 
            expenses={filteredExpenses} 
            onDeleteExpense={deleteExpense} 
            darkMode={darkMode}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;