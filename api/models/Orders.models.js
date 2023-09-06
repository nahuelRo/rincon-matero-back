const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class Orders extends Model {}

Orders.init(
  {
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "orders" }
);

module.exports = Orders;
