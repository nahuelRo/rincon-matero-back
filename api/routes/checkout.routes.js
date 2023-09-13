const express = require("express");
const router = express.Router();
const { Users, Products, Orders, Orders_products } = require("../models");

router.post("/user/:userId/order", async (req, res) => {
  const { userId } = req.params;
  const { total_price, items } = req.body;

  try {
    const user = await Users.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const today = new Date();

    const order = await Orders.create({
      userId,
      status: "PENDING",
      purchase_date: today,
      total_price,
    });

    const orderProducts = [];

    for (const item of items) {
      const { id, quantity } = item;

      const product = await Products.findByPk(id);

      if (product.stock < quantity) {
        return res
          .status(400)
          .json({ message: "Insufficient stock for the product" });
      }

      product.stock -= quantity;
      await product.save();

      orderProducts.push({
        orderId: order.id,
        productId: product.id,
        quantity,
      });
    }

    await Orders_products.bulkCreate(orderProducts);

    res.status(201).json({ message: "Order created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating order" });
  }
});

module.exports = router;
