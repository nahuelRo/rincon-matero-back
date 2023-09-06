const express = require("express");
const router = express.Router();
const token = require("../config/token");
const cookieParser = require("cookie-parser");
const validateCookie = require("../middlewares/auth.middlewares");

router.use(cookieParser());

router.post("/logout", (req, res) => {
  res.clearCookie("token").sendStatus(204);
});

module.exports = router;
