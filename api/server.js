require("dotenv").config();

const express = require("express");
const db = require("./config/db");
const volleyball = require("volleyball");
const cors = require("cors");
const routes = require("./routes");
const models = require("./models");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(volleyball);
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api", routes);

db.sync({ force: false })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running port ${process.env.PORT}`);
    });
  })
  .catch(console.error);
