// components/CartSummary.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

function CartSummary() {
  const { cart, removeFromCart, totalAmount } = useCart();

  return (
    <div className="card shadow">
      <div className="card-body">
        <h5 className="mb-3">🧾 Cart Summary</h5>
        {cart.length === 0 ? (
          <p className="text-muted">Your cart is empty.</p>
        ) : (
          <>
            <ul className="list-group mb-3">
              {cart.map(item => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    {item.name} × {item.quantity}
                    <div className="small text-muted">₹{item.price} each</div>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <span>₹{item.price * item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      🗑️
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <h6 className="text-end">Total: ₹{totalAmount.toFixed(2)}</h6>
          </>
        )}
      </div>
    </div>
  );
}

export default CartSummary;
