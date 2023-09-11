const tokens = require("../config/token");

function isAdmin(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.sendStatus(401);
  }

  const { payload } = tokens.validateToken(token);

  if (!payload || payload.role !== "ADMIN") {
    return res.status(401).json({ message: "You are not admin" });
  }

  req.user = payload;
  next();
}

module.exports = isAdmin;
