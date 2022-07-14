const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

app.use(express.json());

app.use(cors());
const router = require("./src/apiRoutes");
app.use(router);

app.listen(5000, () => {
  console.log("listening to 5000");
});
