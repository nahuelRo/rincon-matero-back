const Users = require("./Users_models");
const Shopping_history = require("./Shopping_history_models");
const Rating = require("./Rating_models");
const Products = require("./Product_model");
const Orders_products = require("./Orders_products_models");
const Orders = require("./Orders_models");
const Categories = require("./Categories_models");

Users.belongsToMany(Products, { through: Rating });
Products.belongsToMany(Users, { through: Rating });

Users.hasMany(Orders);

Users.belongsToMany(Orders, { through: Shopping_history });
Orders.belongsToMany(Users, { through: Shopping_history });

Orders.belongsToMany(Products, { through: Orders_products });
Products.belongsToMany(Orders, { through: Orders_products });

Products.belongsTo(Categories);

module.exports = {
  Users,
  Shopping_history,
  Rating,
  Products,
  Orders,
  Orders_products,
  Categories,
};
