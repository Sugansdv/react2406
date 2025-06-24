import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

function Products() {
  return (
    <div>
      <h3 className="mb-4">🛍 Browse Products</h3>
      <div className="row">
        {products.map(prod => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
}

export default Products;