const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class Orders extends Model {}

Orders.init(
  {
    status: {
      type: DataTypes.ENUM,
      values: ["PENDING", "SENT", "DELIVERED"],
      allowNull: false,
    },
    purchase_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "orders" }
);

module.exports = Orders;
