import products from "./data/products.js";
import express from "express";
import cors from "cors"; 

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/api/product", (req, res) => {
  res.json(products);
});
