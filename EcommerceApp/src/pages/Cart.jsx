import React from 'react';
import CartSummary from '../components/CartSummary';

function Cart() {
  return (
    <div>
      <h3 className="mb-4">🛒 Your Cart</h3>
      <CartSummary />
    </div>
  );
}

export default Cart;