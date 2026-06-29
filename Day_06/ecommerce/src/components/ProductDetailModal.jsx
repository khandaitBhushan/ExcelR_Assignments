import React from 'react';

function ProductDetailModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const { name, price, category, image, description, features } = product;

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="detail-modal">
        <button className="close-modal-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>
        
        <div className="detail-modal-content">
          <div className="detail-image-container">
            <img src={image} alt={name} className="detail-image" />
          </div>
          
          <div className="detail-info">
            <div>
              <span className="detail-category">{category}</span>
              <h2 className="detail-title">{name}</h2>
              <div className="detail-price">${price.toFixed(2)}</div>
              <p className="detail-desc">{description}</p>
              
              {features && features.length > 0 && (
                <div className="detail-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <button 
              className="checkout-btn" 
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailModal;
