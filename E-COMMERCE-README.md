# E-Commerce Demo Application

A full-stack e-commerce application built with React frontend and Express.js backend.

## Features

### Backend APIs

- **GET /api/products**: Get all available products (8 sample items)
- **POST /api/cart**: Add item to cart `{productId, qty}`
- **GET /api/cart**: Get cart items with total and item count
- **PUT /api/cart/:id**: Update cart item quantity
- **DELETE /api/cart/:id**: Remove item from cart
- **POST /api/checkout**: Process checkout with customer info → returns receipt

### Frontend Features

- **Products Grid**: Display products with "Add to Cart" functionality
- **Shopping Cart**:
  - View cart items with quantities and subtotals
  - Update quantities or remove items
  - Real-time total calculation
  - Cart icon with item count badge
- **Checkout Process**:
  - Customer information form (name, email, phone, address)
  - Form validation
  - Order summary display
- **Receipt Modal**:
  - Complete order details
  - Customer information
  - Order timestamp and ID
- **Responsive Design**: Works on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js installed
- npm or yarn package manager

### Installation & Running

1. **Start the Backend Server:**

   ```bash
   cd Server
   npm run dev
   ```

   Server runs on http://localhost:3000

2. **Start the Frontend Development Server:**
   ```bash
   cd Client
   npm run dev
   ```
   Frontend runs on http://localhost:5174 (or next available port)

### Usage

1. **Browse Products**: Scroll down to view the product grid
2. **Add to Cart**: Click "Add to Cart" on any product
3. **View Cart**: Click "See Cart" button in navbar or hero section
4. **Manage Cart**: Update quantities or remove items in the cart sidebar
5. **Checkout**: Click "Proceed to Checkout" and fill in customer information
6. **Complete Order**: Submit the form to receive a receipt

### API Testing

You can test the APIs directly using PowerShell:

```powershell
# Get all products
Invoke-RestMethod -Uri http://localhost:3000/api/products

# Add item to cart
$body = @{productId=1; qty=2} | ConvertTo-Json
Invoke-RestMethod -Uri http://localhost:3000/api/cart -Method POST -Body $body -ContentType "application/json"

# Get cart
Invoke-RestMethod -Uri http://localhost:3000/api/cart
```

## Project Structure

```
demo-e-com/
├── Client/                 # React frontend
│   ├── src/
│   │   ├── Components/     # React components
│   │   │   ├── Navbar.jsx      # Navigation with cart button
│   │   │   ├── Hero.jsx        # Hero section with cart button
│   │   │   ├── Products.jsx    # Product grid display
│   │   │   ├── Cart.jsx        # Shopping cart sidebar
│   │   │   ├── Checkout.jsx    # Checkout form
│   │   │   ├── Receipt.jsx     # Order receipt modal
│   │   │   ├── Section1.jsx    # Existing section
│   │   │   └── Section2.jsx    # Existing section
│   │   ├── ECommerceApp.jsx    # Main app component
│   │   └── main.jsx            # App entry point
│   └── package.json
└── Server/                 # Express.js backend
    ├── src/
    │   ├── data/
    │   │   └── products.js     # Product data
    │   └── index.js            # API server
    └── package.json
```

## Sample Products

The application includes 8 sample products:

- Premium Wireless Headphones - $299.99
- Smart Fitness Watch - $199.99
- Bluetooth Speaker - $89.99
- Gaming Mouse - $79.99
- USB-C Hub - $49.99
- Wireless Charger - $39.99
- Mechanical Keyboard - $149.99
- 4K Webcam - $129.99

## Key Changes Made

1. **Updated Backend**:

   - Enhanced product data structure
   - Added comprehensive cart management APIs
   - Added checkout processing
   - In-memory cart storage (production would use database)

2. **Updated Frontend**:

   - Changed "SCHEDULE A DEMO" buttons to "See Cart" with item count badges
   - Added complete e-commerce functionality
   - Responsive product grid
   - Full cart management with update/remove capabilities
   - Checkout process with validation
   - Receipt display
   - Modern UI with Tailwind CSS

3. **Enhanced User Experience**:
   - Real-time cart updates
   - Form validation
   - Success/error feedback
   - Mobile-responsive design
   - Cart count indicators
