require("dotenv").config();

const express = require("express");
const app = express();

const helmet = require("helmet");
const cors = require("cors");
const db = require("./db");

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * @path /api
 */

app.use("/api", require("./api"));

db.connect();

const { SERVER_PORT } = process.env;

app.listen(SERVER_PORT, () => {
  console.log(`Server up and running on port ${SERVER_PORT}`);
});
