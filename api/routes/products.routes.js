const express = require("express");
const db = require("../config/db");
const router = express.Router();

const { Op } = require("sequelize");

const Product = require("../models/Products.models");
const { Categories, Products } = require("../models");
const isAdmin = require("../middlewares/admin.middlewares");

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
    const allProducts = await Product.findAll({ include: Categories });
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

router.put("/:id", isAdmin, (req, res) => {
  const { id } = req.params;
  const { categoryId } = req.body;

  Categories.findByPk(categoryId)
    .then((category) => {
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }

      Product.update(req.body, {
        where: { id },
        returning: true,
      })
        .then(([rowCounter, [updatedProduct]]) => {
          if (rowCounter === 0) {
            return res.status(404).json({ message: "Product not found" });
          }
          res.status(200).json(updatedProduct);
        })
        .catch(() => {
          res.status(500).json({ message: "Internal server error" });
        });
    })
    .catch(() => {
      res.status(500).json({ message: "Internal server error" });
    });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await Product.findByPk(id);
    await Products.destroy({
      where: { id },
    });
    console.log(deleteProduct);
    res.json(deleteProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error deleting product" });
  }
});

//Ruta para filtrar productos por categoría
router.get("/categoryId/:categoryId", (req, res) => {
  const categoryId = req.params.categoryId;

  //Busco la categoría por id
  Categories.findByPk(categoryId)
    .then((category) => {
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }

      //Busco los productos que pertenezcan a esa categoría
      Product.findAll({ where: { categoryId } })
        .then((products) => res.json(products))
        .catch(() => {
          res
            .status(500)
            .json({ error: "Error when searching for products by category" });
        });
    })
    .catch(() => {
      res.status(500).json({ error: "Error when searching for category" });
    });
});

////RUTA DE BUSCADOR
router.get("/search/:query", async (req, res) => {
  try {
    const { query } = req.params;

    const productsSearch = await Product.findAll({
      where: {
        name: {
          [Op.like]: `%${query}%`,
        },
      },
    });

    res.status(200).json(productsSearch);
  } catch (error) {
    res.status(500).json({ message: "Error searching for product" });
  }
});

module.exports = router;
