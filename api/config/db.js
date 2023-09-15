const Sequelize = require("sequelize");

const db = new Sequelize(process.env.SEQUELIZE_DB, null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
