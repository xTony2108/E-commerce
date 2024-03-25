const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    frontImage: {
      type: String,
      required: true,
    },
    images: [
      {
        image: String,
      },
    ],
    info: [
      {
        description: String,
      },
    ],
    hardware: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: Date,
    },
    qnt: {
      type: Number,
    },
  },
  { strict: true }
);

const Product = model("Product", productSchema);

module.exports = Product;
