import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, onDeleteExpense, darkMode }) => {
  if (expenses.length === 0) {
    return (
      <div className={`alert ${darkMode ? 'alert-dark' : 'alert-info'}`}>
        No expenses recorded yet.
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table className={`table ${darkMode ? 'table-dark' : ''}`}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              onDelete={onDeleteExpense}
              darkMode={darkMode}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;