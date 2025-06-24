
import React from 'react';

const productList = [
  { id: 1, name: 'Smartphone', price: '₹25,000' },
  { id: 2, name: 'Headphones', price: '₹1,500' },
  { id: 3, name: 'Laptop', price: '₹50,000' },
];

export default function Products() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row">
        {productList.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: {product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
