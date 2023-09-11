const tokens = require("../config/token");

function validateCookie(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    res.sendStatus(401);
  }
  const { payload } = tokens.validateToken(token);

  req.user = payload;

  if (payload) return next();

  res.sendStatus(401);
}

module.exports = validateCookie;
