const express = require("express");
const router = express.Router();

const Product = require("../models/Products.models");

router.post("/", async (req, res) => {
  try {
    const { name, description, price, stock, image, categoryId } = req.body;

    const newProduct = await Product.create({
      name,
      description,
      price,
      stock,
      image,
      categoryId,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
});

router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.findAll();
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({ message: "Error getting all products" });
  }
});

module.exports = router;
