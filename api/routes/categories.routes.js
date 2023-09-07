const express = require("express");
const router = express.Router();

const { Categories } = require("../models/index");

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

module.exports = router;
