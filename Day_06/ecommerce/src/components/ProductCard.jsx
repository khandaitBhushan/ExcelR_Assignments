import React from 'react';

function ProductCard({ product, onAddToCart, onViewDetails }) {
  const { name, price, category, image, rating, reviews } = product;

  // Render yellow stars based on rating number
  const renderStars = (ratingVal) => {
    const stars = [];
    const floor = Math.floor(ratingVal);
    for (let i = 0; i < 5; i++) {
      if (i < floor) {
        stars.push('★');
      } else {
        stars.push('☆');
      }
    }
    return stars.join('');
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent opening the product detail modal
    onAddToCart(product);
  };

  return (
    <div className="product-card" onClick={() => onViewDetails(product)}>
      <div className="product-image-container">
        <img src={image} alt={name} className="product-card-image" />
      </div>
      
      <div className="product-info">
        <span className="product-card-category">{category}</span>
        <h3 className="product-card-title">{name}</h3>
        
        <div className="product-card-rating">
          <span>{renderStars(rating)}</span>
          <span className="product-card-reviews">({reviews})</span>
        </div>
        
        <div className="product-card-footer">
          <span className="product-card-price">${price.toFixed(2)}</span>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
