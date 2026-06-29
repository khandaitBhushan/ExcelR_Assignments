import React, { useState } from 'react';

function CheckoutModal({ isOpen, onClose, onOrderSuccess, cartItems }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
  
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple mock order ID generation
    const randomId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(randomId);
    setIsSuccess(true);
    
    // Clear cart and notify parent
    onOrderSuccess();
  };

  const handleOverlayClick = (e) => {
    // Only close if they click on the overlay, and only if not in success state
    if (e.target.className === 'modal-overlay' && !isSuccess) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="checkout-modal">
        {!isSuccess ? (
          <>
            <h2>Checkout Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="checkout-name">Full Name</label>
                <input
                  id="checkout-name"
                  type="text"
                  name="name"
                  className="form-input"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="checkout-email">Email Address</label>
                <input
                  id="checkout-email"
                  type="email"
                  name="email"
                  className="form-input"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="checkout-address">Shipping Address</label>
                <input
                  id="checkout-address"
                  type="text"
                  name="address"
                  className="form-input"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="123 Main St, City, Country"
                />
              </div>

              <div className="form-group">
                <label htmlFor="checkout-card">Card Number</label>
                <input
                  id="checkout-card"
                  type="text"
                  name="cardNumber"
                  className="form-input"
                  required
                  pattern="\d{16}"
                  title="Card number must be 16 digits"
                  maxLength="16"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234567812345678"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="checkout-expiry">Expiry Date</label>
                  <input
                    id="checkout-expiry"
                    type="text"
                    name="expiry"
                    className="form-input"
                    required
                    pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
                    title="Expiry date must be in MM/YY format"
                    maxLength="5"
                    value={formData.expiry}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="checkout-cvv">CVV</label>
                  <input
                    id="checkout-cvv"
                    type="password"
                    name="cvv"
                    className="form-input"
                    required
                    pattern="\d{3}"
                    title="CVV must be 3 digits"
                    maxLength="3"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                  />
                </div>
              </div>

              <div style={{ margin: '1rem 0', fontWeight: 'bold', fontSize: '1.1rem', color: '#1e293b' }}>
                Total Amount: ${totalAmount.toFixed(2)}
              </div>

              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Place Order
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="order-success-container">
            <div className="success-icon">✓</div>
            <h3 className="success-title">Order Placed Successfully!</h3>
            <p className="success-text">
              Thank you for shopping with us, <strong>{formData.name}</strong>.
            </p>
            <p className="success-text">
              Your order ID is: <span className="order-id">{orderId}</span>
            </p>
            <p className="success-text" style={{ fontSize: '0.85rem' }}>
              We have sent a confirmation email to <em>{formData.email}</em>.
            </p>
            <button 
              className="checkout-btn" 
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutModal;
