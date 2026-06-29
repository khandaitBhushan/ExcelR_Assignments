import React, { useState, useMemo } from 'react';
import { products } from './data/products';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetailModal from './components/ProductDetailModal';
import Cart from './components/Cart';
import CheckoutModal from './components/CheckoutModal';

function App() {
  // State variables
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Available categories
  const categories = ['All', 'Electronics', 'Fashion', 'Home & Kitchen', 'Books'];

  // Filter products based on search term & category selection
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  // Total item count in cart
  const cartCount = useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  // Handler: Add item to cart
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Handler: Change item quantity in cart (+1 / -1)
  const handleQuantityChange = (productId, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0) // Remove if quantity becomes 0
    );
  };

  // Handler: Remove item completely from cart
  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Handler: Checkout order placed successfully
  const handleOrderSuccess = () => {
    setCartItems([]); // Empty the cart
  };

  return (
    <div className="app-container">
      {/* Top Navbar */}
      <Navbar
        cartCount={cartCount}
        onCartToggle={() => setIsCartOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {/* Category Selection Filter Bar */}
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Main Grid View */}
      <main className="main-content">
        <h2 className="section-title">
          {selectedCategory === 'All' ? 'All Products' : selectedCategory}
          {searchTerm && ` matching "${searchTerm}"`} ({filteredProducts.length})
        </h2>
        
        <ProductList
          products={filteredProducts}
          onAddToCart={handleAddToCart}
          onViewDetails={setSelectedProduct}
        />
      </main>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Shopping Cart Sidebar Overlay */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onQuantityChange={handleQuantityChange}
        onRemove={handleRemoveFromCart}
        onCheckout={() => {
          setIsCartOpen(false); // Close cart
          setIsCheckoutOpen(true); // Open checkout
        }}
      />

      {/* Checkout Form Modal Overlay */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onOrderSuccess={handleOrderSuccess}
        cartItems={cartItems}
      />

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} QuickCart Inc. Built with React for Day 06 Assignment.</p>
      </footer>
    </div>
  );
}

export default App;
