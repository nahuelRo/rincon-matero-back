const express = require("express");
const router = express.Router();
const validateCookie = require("../middlewares/auth.middlewares");
const { Users } = require("../models");

router.put("/:id", validateCookie, (req, res) => {
  const { id } = req.params;

  Users.update(req.body, { where: { id }, returning: true }).then((result) => {
    const [rowCounter, user] = result;

    if (!user[0]) {
      return res
        .status(404)
        .json({ message: "The user was not found with that id" });
    }

    res.status(200).json(user[0]);
  });
});

module.exports = router;
