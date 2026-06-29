import React from 'react';

function Navbar({ cartCount, onCartToggle, searchTerm, onSearchChange }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h1 onClick={() => window.location.reload()}>🛍️ QuickCart</h1>
      </div>
      
      <div className="nav-controls">
        <input
          type="text"
          placeholder="Search products..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        
        <button className="cart-toggle-btn" onClick={onCartToggle}>
          <span>🛒 Cart</span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
