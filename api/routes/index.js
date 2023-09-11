const express = require("express");
const router = express.Router();

const authRouter = require("./auth.routes");
const productsRouter = require("./products.routes");
const usersRouter = require("./users.routes");
const categoriesRouter = require("./categories.routes");
const checkoutRouter = require("./checkout.routes");

router.use("/auth", authRouter);
router.use("/products", productsRouter);
router.use("/users", usersRouter);
router.use("/categories", categoriesRouter);
router.use("/checkout", checkoutRouter);

module.exports = router;
