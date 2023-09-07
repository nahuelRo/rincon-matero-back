const express = require("express");
const router = express.Router();
const { Users, Products, Orders } = require("../models");

router.post("/user/:userId/order", (req, res) => {
  const { userId } = req.params;

  const { productId, quantity } = req.body;

  Users.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }

      return Orders.findOne({ userId, status: "PENDING" });
    })
    .then((order) => {
      if (!order) {
        return Orders.create({
          userId,
          status: "PENDING",
          items: [],
        });
      }

      return order;
    })
    .then((order) => {
      return Products.findByPk(productId).then((product) => ({
        order,
        product,
      }));
    })
    .then(({ order, product }) => {
      if (!product) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }

      order.items.push({ product, quantity });
      return order.save();
    })
    .then(() => {
      res
        .status(200)
        .json({ message: "Producto agregado a la orden con éxito" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Error interno del servidor" });
    });
});

module.exports = router;
