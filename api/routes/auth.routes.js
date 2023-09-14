const express = require("express");
const router = express.Router();

const validateCookie = require("../middlewares/auth.middlewares");
const { generateToken } = require("../config/token");

const { Users } = require("../models/index");

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

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ where: { email } });

  if (!user) {
    res.sendStatus(401);
  } else {
    const isValid = await user.validate_password(password);

    if (!isValid) res.sendStatus(401);
    else {
      const { id, name, last_name, address, role } = user;
      const payload = { id, email, name, last_name, address, role };
      const token = generateToken(payload);

      res.cookie("token", token).send(payload);
    }
  }
});

router.post("/me", validateCookie, (req, res) => {
  res.json(req.user);
});

module.exports = router;
