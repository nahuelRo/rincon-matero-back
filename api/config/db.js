const Sequelize = require("sequelize");

const db = new Sequelize("rincon_matero", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
