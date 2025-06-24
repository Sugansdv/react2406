import React from 'react';
import { formatRupees } from '../../utils/currencyFormatter';

const ExpenseItem = ({ expense, onDelete, darkMode }) => {
  const formattedDate = new Date(expense.date).toLocaleDateString();
  const amountColor = expense.amount >= 0 ? 'text-success' : 'text-danger';

  return (
    <tr>
      <td>{formattedDate}</td>
      <td>{expense.title}</td>
      <td>
        <span className={`badge ${
          darkMode ? 'bg-light text-dark' : 'bg-primary text-white'
        }`}>
          {expense.category}
        </span>
      </td>
      <td className={amountColor}>{formatRupees(expense.amount)}</td>
      <td>
        <button
          className={`btn btn-sm ${darkMode ? 'btn-outline-light' : 'btn-outline-danger'}`}
          onClick={() => onDelete(expense.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ExpenseItem;