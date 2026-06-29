import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, onAddToCart, onViewDetails }) {
  if (products.length === 0) {
    return (
      <div className="no-results">
        <p>No products found. Try searching for something else or changing the category!</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}

export default ProductList;
