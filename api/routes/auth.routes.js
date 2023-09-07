const express = require("express");
const router = express.Router();
const token = require("../config/token");
const cookieParser = require("cookie-parser");
const validateCookie = require("../middlewares/auth.middlewares");
const { generateToken } = require("../config/token");

const { Users } = require("../models/index");

router.use(cookieParser());

router.post("/register", (req, res) => {
  Users.findOne({ where: { email: req.body.email } })
    .then((existingUser) => {
      if (existingUser) {
        res.status(400).json({ error: "User already exists" });
      } else {
        Users.create(req.body)
          .then(() => {
            res.status(201).json({ message: "Successful registration" });
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

router.post("/logout", (req, res) => {
  res.clearCookie("token").sendStatus(204);
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  Users.findOne({ where: { email } }).then((user) => {
    if (!user) return res.status(401).json({ message: "User does not exist" });

    user.validate_password(password).then((validate) => {
      if (!validate) res.status(401).json({ message: "Invalid pasword" });

      const token = generateToken(user.id);

      const payload = {
        id: user.id,
        email: user.email,
        name: user.name,
        lastname: user.lastname,
        token: token,
      };
      res.send(payload);
    });
  });
});

router.post("/me", validateCookie, (req, res) => {
  res.json(req.user);
});

module.exports = router;
