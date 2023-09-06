const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class Shopping_history extends Model {}

Shopping_history.init(
  {
    purchase_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    purchased_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "shopping_history" }
);

module.exports = Shopping_history;
