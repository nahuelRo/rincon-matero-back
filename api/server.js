const express = require("express");
const db = require("./config/db");
const volleyball = require("volleyball");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(volleyball);
app.use(cors());

app.use("/api", routes);

db.sync({ force: false })
  .then(() => {
    app.listen(3001, () => {
      console.log("Server running port 3001");
    });
  })
  .catch(console.error);
