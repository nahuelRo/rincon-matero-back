const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class Rating extends Model {}

Rating.init(
  {
    classfication: {
      type: DataTypes.FLOAT,
    },
    comment: {
      type: DataTypes.TEXT,
    },
  },
  { sequelize: db, modelName: "rating" }
);

module.exports = db;
