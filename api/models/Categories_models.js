const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class Categories extends Model {}

Categories.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  { sequelize: db, modelName: "categories" }
);

module.exports = db;
