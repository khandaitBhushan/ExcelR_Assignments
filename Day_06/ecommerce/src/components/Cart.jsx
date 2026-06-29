import React from 'react';

function Cart({ isOpen, onClose, cartItems, onQuantityChange, onRemove, onCheckout }) {
  if (!isOpen) return null;

  // Calculate subtotal
  const totalSubtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-cart-btn" onClick={onClose} aria-label="Close cart">
            ✕
          </button>
        </div>
        
        <div className="cart-items-container">
          {cartItems.length === 0 ? (
            <div className="empty-cart-message">
              <p>Your cart is empty.</p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>Add some products to get started!</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-item-img" />
                
                <div className="cart-item-details">
                  <div>
                    <h4 className="cart-item-title">{item.name}</h4>
                    <span className="cart-item-price">${item.price.toFixed(2)}</span>
                  </div>
                  
                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button 
                        className="quantity-btn" 
                        onClick={() => onQuantityChange(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button 
                        className="quantity-btn" 
                        onClick={() => onQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                    
                    <button 
                      className="remove-item-btn" 
                      onClick={() => onRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-row">
              <span>Total:</span>
              <span>${totalSubtotal.toFixed(2)}</span>
            </div>
            <button className="checkout-btn" onClick={onCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
