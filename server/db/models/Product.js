const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
    },
    images: {
      type: Array,
    },
    description: {
      type: Array,
    },
    hardware: {
      type: String,
    },
    price: {
      type: String,
    },
    releaseDate: {
      type: Date,
    },
  },
  { strict: true }
);

const Product = model("Product", productSchema);

module.exports = Product;
