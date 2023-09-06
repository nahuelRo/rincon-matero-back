const jwt = require("jsonwebtoken");

const SECRET = "password_secret";

function generateToken(payload) {
  const token = jwt.sign({ payload }, SECRET);
  return token;
}

function validateToken(token) {
  return jwt.verify(token, SECRET);
}

module.exports = { generateToken, validateToken };
