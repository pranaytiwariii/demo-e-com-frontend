import React, { useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Section1 from "./Components/Section1.jsx";
import Section2 from "./Components/Section2.jsx";
import Products from "./Components/Products.jsx";
import Cart from "./Components/Cart.jsx";
import Checkout from "./Components/Checkout.jsx";
import Receipt from "./Components/Receipt.jsx";
import Headroom from "react-headroom";
import axios from "axios";

function ECommerceApp() {
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [receiptOpen, setReceiptOpen] = useState(false);
  const [currentCart, setCurrentCart] = useState({
    items: [],
    total: 0,
    itemCount: 0,
  });
  const [currentReceipt, setCurrentReceipt] = useState(null);
  const [cartUpdate, setCartUpdate] = useState(0);

  const handleCartClick = () => {
    setCartOpen(true);
  };

  const handleAddToCart = async (productId, qty) => {
    try {
      await axios.post("http://localhost:3000/api/cart", { productId, qty });
      setCartUpdate((prev) => prev + 1);

      // Update cart count for navbar
      const response = await axios.get("http://localhost:3000/api/cart");
      setCurrentCart(response.data);

      // Show success message or animation
      alert("Product added to cart!");
    } catch (error) {
      console.error("Failed to add to cart:", error);
      alert("Failed to add product to cart. Please try again.");
    }
  };

  const handleCheckout = (cart) => {
    setCurrentCart(cart);
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  const handleCheckoutSuccess = (receipt) => {
    setCurrentReceipt(receipt);
    setCheckoutOpen(false);
    setReceiptOpen(true);
    setCurrentCart({ items: [], total: 0, itemCount: 0 });
    setCartUpdate((prev) => prev + 1);
  };

  const handleReceiptClose = () => {
    setReceiptOpen(false);
    setCurrentReceipt(null);
  };

  // Fetch initial cart data
  React.useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/cart");
        setCurrentCart(response.data);
      } catch (error) {
        console.error("Failed to fetch cart:", error);
      }
    };
    fetchCart();
  }, []);

  return (
    <>
      <Headroom>
        <Navbar
          onCartClick={handleCartClick}
          cartItemCount={currentCart.itemCount}
        />
      </Headroom>
      <Hero
        onCartClick={handleCartClick}
        cartItemCount={currentCart.itemCount}
      />
      <Section1 />
      <Products onAddToCart={handleAddToCart} />
      <Section2 />

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onCheckout={handleCheckout}
        cartUpdate={cartUpdate}
      />

      <Checkout
        cart={currentCart}
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        onSuccess={handleCheckoutSuccess}
      />

      <Receipt
        receipt={currentReceipt}
        isOpen={receiptOpen}
        onClose={handleReceiptClose}
      />
    </>
  );
}

export default ECommerceApp;
