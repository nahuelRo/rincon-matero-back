const express = require("express");
const router = express.Router();

const authRouter = require("./auth.routes");
const productsRouter = require("./products.routes");
const usersRouter = require("./users.routes");
const categoriesRouter = require("./categories.routes");

router.use("/auth", authRouter);
router.use("/products", productsRouter);
router.use("/users", usersRouter);
router.use("/categories", categoriesRouter);

module.exports = router;
