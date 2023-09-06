const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

class User extends Model {
  //logica hash y validate password
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }

  validate_password(password) {
    return this.hash(password, this.salt).then(
      (newHash) => newHash === this.password
    );
  }
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      bcrypt,
    },

    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "El campo email debe ser una dirección de correo electrónico válida", //Plantear el lenguage de los msg/alert (Ingles ó Español)
        },
      },
    },

    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    role: {
      type: DataTypes.ENUM,
      values: ["ADMIN", "MODERATOR", "USER"],
    },
  },
  { sequelize: db, modelName: "user" }
);

//hook beforeCreate para logica de salt
User.beforeCreate((user) => {
  const salt = bcrypt.genSaltSync();
  user.salt = salt;

  return user.hash(user.password, user.salt).then((hash) => {
    user.password = hash;
  });
});

module.exports = User;
