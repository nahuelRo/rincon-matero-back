const express = require("express");
const router = express.Router();
const { Categories, Products } = require("../models");

router.post("/", (req, res) => {
  Categories.findOne({ where: { name: req.body.name } })
    .then((existingCategorie) => {
      if (existingCategorie) {
        res.status(400).json({ error: "Categorie already exists" });
      } else {
        Categories.create(req.body)
          .then(() => {
            res.status(201).json({ message: "Categorie created" });
          })
          .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
          });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    });
});

router.delete("/:categoryId", (req, res) => {
  const categoryId = req.params.categoryId;

  Categories.findByPk(categoryId).then((category) => {
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    const deleteCategory = category;
    Products.destroy({ where: { categoryId } })
      .then(() => {
        category
          .destroy()
          .then(() => {
            res.json(deleteCategory);
          })
          .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "Error deleting category" });
          });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Error deleting products" });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Error when searching for category" });
      });
  });
});

///RUTA MODIFICAR CATEGORIA
router.put("/:categoryId", async (req, res) => {
  const { categoryId } = req.params;
  const { name, description } = req.body;

  try {
    const category = await Categories.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    await category.update({ name, description });
    res.status(200).json({ message: "Category name and description updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const allCategories = await Categories.findAll();
    res.status(200).json(allCategories);
  } catch (error) {
    res.status(500).json({ error: "Error getting all categories" });
  }
});

router.get("/:categoryId", async (req, res) => {
  const { categoryId } = req.params;
  try {
    const category = await Categories.findByPk(categoryId);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: "Error getting category" });
  }
});
module.exports = router;
