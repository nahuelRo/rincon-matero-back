const bcrypt = require("bcrypt");
require("dotenv").config();

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

  const categoriesData = [
    {
      name: "Mates",
      description: "Descripción de la categoria 1",
    },
    {
      name: "Bombillas",
      description: "Descripción de la categoria 2",
    },
    {
      name: "Termos",
      description: "Descripción de la categoria 3",
    },
  ];

  const productData = [
    {
      name: "MATE CAMIONERO DE ALGARROBO PERSONALIZADO",
      description: "Descripción del Producto 1",
      price: 30000.99,
      stock: 2,
      image:
        "https://d22fxaf9t8d39k.cloudfront.net/8402bf563c5451e2cfe30791904333e2308ab4fc2a44078af0394d102e0d58ea19762.jpeg",
      createdAt: "2023-09-06 10:00:00",
      updatedAt: "2023-09-06 10:00:00",
      categoryId: 1,
    },
    {
      name: "MATE IMPERIAL PREMIUM PERSONALIZADO ",
      description: "Descripción del Producto 2",
      price: 26000.99,
      stock: 50,
      image:
        "https://d22fxaf9t8d39k.cloudfront.net/7a2ae472b18e49cea5a7caa4412486e203d3d3918de8cb8130200e34985627ea19762.jpg",
      createdAt: "2023-09-06 11:00:00",
      updatedAt: "2023-09-06 11:00:00",
      categoryId: 1,
    },
    {
      name: "MATE CAMIONERO DE ALGARROBO -LISO- (sin personalización) ",
      description: "Descripción del Producto 3",
      price: 25000.99,
      stock: 75,
      image:
        "https://d22fxaf9t8d39k.cloudfront.net/ba1e77d8d438601b898ab1f8395f70d19a15ddbe5b9c202d0eaa4e1b893dd4f619762.jpeg",
      createdAt: "2023-09-06 12:00:00",
      updatedAt: "2023-09-06 12:00:00",
      categoryId: 1,
    },
    {
      name: "BOMBILLON PICO LORO DORADO LISO ",
      description: "Descripción del Producto 4",
      price: 13000.99,
      stock: 60,
      image:
        "https://d22fxaf9t8d39k.cloudfront.net/18b89e7248b473dd9093f234b047e7af6c768d41c5e0ab7ee25ef98eeadc30fa19762.jpeg",
      createdAt: "2023-09-06 13:00:00",
      updatedAt: "2023-09-06 13:00:00",
      categoryId: 2,
    },
    {
      name: "BOMBILLA SEMI RECTA",
      description: "Descripción del Producto 5",
      price: 15000.99,
      stock: 10,
      image:
        "https://d22fxaf9t8d39k.cloudfront.net/57f9c4e1661be617689607bc80b46e8c68d3b9611e4825689234e70de9ac558a19762.png",
      createdAt: "2023-09-06 14:00:00",
      updatedAt: "2023-09-06 14:00:00",
      categoryId: 2,
    },
    {
      name: "BOMBILLA PICO LORO DESARMABLE ",
      description: "Descripción del Producto 5",
      price: 15000.99,
      stock: 120,
      image:
        "https://d22fxaf9t8d39k.cloudfront.net/2a8c104bc9e6a84893533bbe6e1093195a9c748489aeb801c007960d205f24d319762.png",
      createdAt: "2023-09-06 14:00:00",
      updatedAt: "2023-09-06 14:00:00",
      categoryId: 2,
    },
    {
      name: "Termo LUMINOX 1LT BLANCO",
      description: "Descripción del Producto 5",
      price: 29000.99,
      stock: 120,
      image:
        "https://d22fxaf9t8d39k.cloudfront.net/77a309d61feedd7075245ec74485861f403b6c40f53c0169a9f6c45b4b72458b19762.jpg",
      createdAt: "2023-09-06 14:00:00",
      updatedAt: "2023-09-06 14:00:00",
      categoryId: 3,
    },
    {
      name: "Termo LUMINOX Negro",
      description: "Descripción del Producto 5",
      price: 29000.99,
      stock: 120,
      image:
        "https://d22fxaf9t8d39k.cloudfront.net/5ceae8c0df1c1782204ac67f28a8a20ce30d30d854a585b1ad9bbc1a83ad920d19762.jpg",
      createdAt: "2023-09-06 14:00:00",
      updatedAt: "2023-09-06 14:00:00",
      categoryId: 3,
    },
    {
      name: "Termo LUMINOX 1LT Gris",
      description: "Descripción del Producto 5",
      price: 29000.99,
      stock: 120,
      image:
        "https://d22fxaf9t8d39k.cloudfront.net/c6a0c50c5e33cd25d8e831fe28d4ede1fb04d4842925265e0e664a88e77a241619762.jpg",
      createdAt: "2023-09-06 14:00:00",
      updatedAt: "2023-09-06 14:00:00",
      categoryId: 3,
    },
  ];

  await Users.bulkCreate(userData);
  await Categories.bulkCreate(categoriesData);
  await Products.bulkCreate(productData);
})();
