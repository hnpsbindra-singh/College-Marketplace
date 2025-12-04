const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// @route   POST /api/products
// @desc    Create new product
router.post("/", async (req, res) => {
  try {
    const { name, batch, rollNumber, mobileNumber, productName, price } = req.body;

    if (!name || !batch || !rollNumber || !mobileNumber || !productName || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = await Product.create({
      name,
      batch,
      rollNumber,
      mobileNumber,
      productName,
      price,
    });

    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route   GET /api/products
// @desc    Get all active products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({ isActive: true }).sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route   DELETE /api/products/:id
// @desc    Mark product as inactive (like sold)
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product marked as sold/removed" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
