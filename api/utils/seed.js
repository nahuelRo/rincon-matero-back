const bcrypt = require("bcrypt");

const {
  Users,
  Categories,
  Orders,
  Orders_products,
  Products,
  Rating,
  Shopping_history,
} = require("../models");

(async function () {
  const generateHashedPassword = (pass) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const password = bcrypt.hashSync(pass, salt);
    return { salt, password };
  };

  const userData = [
    {
      name: "Nombre1",
      last_name: "Apellido1",
      email: "correo1@example.com",
      address: "Dirección1",
      role: "ADMIN",
      ...generateHashedPassword("clave1"),
      createdAt: "2023-09-06 10:00:00",
      updatedAt: "2023-09-06 10:00:00",
    },
    {
      name: "Nombre2",
      last_name: "Apellido2",
      email: "correo2@example.com",
      address: "Dirección2",
      role: "USER",
      ...generateHashedPassword("clave1"),
      createdAt: "2023-09-06 11:00:00",
      updatedAt: "2023-09-06 11:00:00",
    },
    {
      name: "Nombre3",
      last_name: "Apellido3",
      email: "correo3@example.com",
      address: "Dirección3",
      role: "ADMIN",
      ...generateHashedPassword("clave1"),
      createdAt: "2023-09-06 12:00:00",
      updatedAt: "2023-09-06 12:00:00",
    },
    {
      name: "Nombre4",
      last_name: "Apellido4",
      email: "correo4@example.com",
      address: "Dirección4",
      role: "USER",
      ...generateHashedPassword("clave1"),
      createdAt: "2023-09-06 13:00:00",
      updatedAt: "2023-09-06 13:00:00",
    },
    {
      name: "Nombre5",
      last_name: "Apellido5",
      email: "correo5@example.com",
      address: "Dirección5",
      role: "ADMIN",
      ...generateHashedPassword("clave1"),
      createdAt: "2023-09-06 14:00:00",
      updatedAt: "2023-09-06 14:00:00",
    },
    {
      name: "Nombre6",
      last_name: "Apellido6",
      email: "correo6@example.com",
      address: "Dirección6",
      role: "USER",
      ...generateHashedPassword("clave1"),
      createdAt: "2023-09-06 15:00:00",
      updatedAt: "2023-09-06 15:00:00",
    },
    {
      name: "Nombre7",
      last_name: "Apellido7",
      email: "correo7@example.com",
      address: "Dirección7",
      role: "ADMIN",
      ...generateHashedPassword("clave1"),
      createdAt: "2023-09-06 16:00:00",
      updatedAt: "2023-09-06 16:00:00",
    },
    {
      name: "Nombre8",
      last_name: "Apellido8",
      email: "correo8@example.com",
      address: "Dirección8",
      role: "USER",
      ...generateHashedPassword("clave1"),
      createdAt: "2023-09-06 17:00:00",
      updatedAt: "2023-09-06 17:00:00",
    },
    {
      name: "Nombre9",
      last_name: "Apellido9",
      email: "correo9@example.com",
      address: "Dirección9",
      role: "ADMIN",
      ...generateHashedPassword("clave1"),
      createdAt: "2023-09-06 18:00:00",
      updatedAt: "2023-09-06 18:00:00",
    },
    {
      name: "Nombre10",
      last_name: "Apellido10",
      email: "correo10@example.com",
      address: "Dirección10",
      role: "USER",
      ...generateHashedPassword("clave1"),
      createdAt: "2023-09-06 19:00:00",
      updatedAt: "2023-09-06 19:00:00",
    },
  ];

  await Users.bulkCreate(userData);
})();
