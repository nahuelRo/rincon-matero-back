const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class Rating extends Model {}

Rating.init(
  {
    classfication: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    comment: {
      type: DataTypes.TEXT,
    },
  },
  { sequelize: db, modelName: "rating" }
);

module.exports = Rating;
