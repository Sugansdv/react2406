// components/ProductCard.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top"
          style={{ height: 220, objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5>{product.name}</h5>
          <p className="text-muted small">{product.category}</p>
          <p className="small">{product.description}</p>
          <h6>₹{product.price}</h6>
          <button className="btn btn-success w-100 btn-sm" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
