const Users = require("./Users.models");
const Rating = require("./Ratings.models");
const Products = require("./Products.models");
const Orders_products = require("./Orders_products.models");
const Orders = require("./Orders.models");
const Categories = require("./Categories.models");

Users.belongsToMany(Products, { through: Rating });
Products.belongsToMany(Users, { through: Rating });

Users.hasMany(Orders);

Orders.belongsToMany(Products, { through: Orders_products });
Products.belongsToMany(Orders, { through: Orders_products });

Products.belongsTo(Categories);

module.exports = {
  Users,
  Rating,
  Products,
  Orders,
  Orders_products,
  Categories,
};
