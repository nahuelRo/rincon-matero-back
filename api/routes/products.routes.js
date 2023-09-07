const express = require("express");
const db = require("../config/db");
const router = express.Router();

const Product = require("../models/Products.models");
const { Categories } = require("../models");

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

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Categories.findByPk(req.body.categoryId);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const [rowCounter, product] = await Product.update(req.body, {
      where: { id },
      returning: true,
    });

    if (!product[0]) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product[0]);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Product.findByPk(id)
    .then((product) => {
      if (!product) {
        res.status(404).json({ error: "Product not found" });
      } else {
        res.json(product);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    });
});

module.exports = router;
