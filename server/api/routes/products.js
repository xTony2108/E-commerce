const express = require("express");
const { Product } = require("../../db");
const app = express.Router();

/**
 * @path /api/products
 */

app.get("/", async (_, res) => {
  try {
    const products = await Product.find({}, "", { lean: true });
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

module.exports = app;
