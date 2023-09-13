const express = require("express");
const router = express.Router();
const { Users, Products, Orders, Orders_products } = require("../models");
const emailer = require("../utils/emailer");

router.post("/user/:userId/checkout", async (req, res) => {
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

    emailer.sendMail(user);
    res.status(201).json({ message: "Order created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating order" });
  }
});

router.get("/user/:userId/history", async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await Users.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const orders = await Orders.findAll({
      where: { userId },
      include: [
        {
          model: Products,
          through: {
            model: Orders_products,
            attributes: ["quantity"],
          },
        },
      ],
    });

    if (orders.length === 0) {
      return res.status(404).json({ error: "Orders not found" });
    }

    const orderHistory = orders.map((order) => {
      return {
        orderId: order.id,
        status: order.status,
        purchaseDate: order.purchase_date,
        total_price: order.total_price,
        products: order.products,
      };
    });

    res.status(200).json(orderHistory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error retrieving order history" });
  }
});

module.exports = router;
