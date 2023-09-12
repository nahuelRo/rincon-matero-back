const express = require("express");
const router = express.Router();
const isAdmin = require("../middlewares/admin.middlewares");
const { Categories, Products } = require("../models");

router.post("/", isAdmin, (req, res) => {
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

// router.delete("/:categoryId", isAdmin, (req, res) => {
//   const categoryId = req.params.categoryId;

//   Categories.findByPk(categoryId).then((category) => {
//     if (!category) {
//       return res.status(404).json({ error: "Category not found" });
//     }

//     Products.destroy({ where: { categoryId } })
//       .then(() => {
//         category
//           .destroy()
//           .then(() => {
//             res.sendStatus(204);
//           })
//           .catch((error) => {
//             console.error(error);
//             res.status(500).json({ error: "Error deleting category" });
//           });
//       })
//       .catch((error) => {
//         console.error(error);
//         res.status(500).json({ error: "Error deleting products" });
//       })
//       .catch((error) => {
//         console.error(error);
//         res.status(500).json({ error: "Error when searching for category" });
//       });
//   });
// });

module.exports = router;
