const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class Orders_products extends Model {}

Orders_products.init(
  {
    status: {
      type: DataTypes.ENUM,
      values: ["PENDING", "SENT", "DELIVERED"],
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "orders_products" }
);

module.exports = Orders_products;
