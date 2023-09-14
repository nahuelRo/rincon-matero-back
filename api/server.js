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
    app.listen(3001, () => {
      console.log("Server running port 3001");
    });
  })
  .catch(console.error);
