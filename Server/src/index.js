import products from "./data/products.js";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// In-memory cart storage (in production, use a database)
let cart = [];
let nextCartId = 1;

app.get("/", (req, res) => {
  res.send("E-commerce API Server");
});

// GET /api/products - Get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// POST /api/cart - Add item to cart
app.post("/api/cart", (req, res) => {
  const { productId, qty } = req.body;

  if (!productId || !qty) {
    return res
      .status(400)
      .json({ error: "Product ID and quantity are required" });
  }

  const product = products.find((p) => p.id === parseInt(productId));
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  // Check if item already exists in cart
  const existingItem = cart.find(
    (item) => item.productId === parseInt(productId)
  );

  if (existingItem) {
    existingItem.qty += parseInt(qty);
    existingItem.subtotal = existingItem.qty * product.price;
  } else {
    const cartItem = {
      id: nextCartId++,
      productId: parseInt(productId),
      name: product.name,
      price: product.price,
      image: product.image,
      qty: parseInt(qty),
      subtotal: product.price * parseInt(qty),
    };
    cart.push(cartItem);
  }

  res.json({ message: "Item added to cart", cart });
});

// GET /api/cart - Get cart items and total
app.get("/api/cart", (req, res) => {
  const total = cart.reduce((sum, item) => sum + item.subtotal, 0);
  res.json({
    items: cart,
    total: total.toFixed(2),
    itemCount: cart.reduce((sum, item) => sum + item.qty, 0),
  });
});

// DELETE /api/cart/:id - Remove item from cart
app.delete("/api/cart/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemIndex = cart.findIndex((item) => item.id === itemId);

  if (itemIndex === -1) {
    return res.status(404).json({ error: "Cart item not found" });
  }

  cart.splice(itemIndex, 1);
  const total = cart.reduce((sum, item) => sum + item.subtotal, 0);

  res.json({
    message: "Item removed from cart",
    cart: {
      items: cart,
      total: total.toFixed(2),
      itemCount: cart.reduce((sum, item) => sum + item.qty, 0),
    },
  });
});

// PUT /api/cart/:id - Update cart item quantity
app.put("/api/cart/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const { qty } = req.body;

  if (!qty || qty < 1) {
    return res.status(400).json({ error: "Valid quantity is required" });
  }

  const item = cart.find((item) => item.id === itemId);
  if (!item) {
    return res.status(404).json({ error: "Cart item not found" });
  }

  item.qty = parseInt(qty);
  item.subtotal = item.qty * item.price;

  const total = cart.reduce((sum, item) => sum + item.subtotal, 0);

  res.json({
    message: "Cart updated",
    cart: {
      items: cart,
      total: total.toFixed(2),
      itemCount: cart.reduce((sum, item) => sum + item.qty, 0),
    },
  });
});

// POST /api/checkout - Process checkout
app.post("/api/checkout", (req, res) => {
  const { cartItems, customerInfo } = req.body;

  if (!cartItems || cartItems.length === 0) {
    return res.status(400).json({ error: "Cart is empty" });
  }

  if (!customerInfo || !customerInfo.name || !customerInfo.email) {
    return res
      .status(400)
      .json({ error: "Customer name and email are required" });
  }

  const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
  const receipt = {
    id: Date.now(),
    customerInfo,
    items: cartItems,
    total: total.toFixed(2),
    timestamp: new Date().toISOString(),
    status: "completed",
  };

  // Clear the cart after successful checkout
  cart = [];
  nextCartId = 1;

  res.json({
    message: "Checkout successful",
    receipt,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Legacy endpoint for backward compatibility
app.get("/api/product", (req, res) => {
  res.json(products);
});
