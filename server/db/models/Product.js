const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const reviewSchema = new Schema(
  {
    author: {
      _id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        ref: "User",
        required: true,
      },
    },
    title: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    stars: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
  },
  { strict: true, timestamps: true }
);

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
    details: [],
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    qnt: {
      type: Number,
      required: true,
    },
    discount: {
      isDiscounted: {
        type: Boolean,
        default: false,
      },
      amount: {
        type: Number,
        required: function () {
          return this.discount && this.discount.isDiscounted === true;
        },
      },
    },
    specialOffer: {
      isSpecialOffer: {
        type: Boolean,
        default: false,
      },
      amount: {
        type: Number,
        required: function () {
          return this.specialOffer.isSpecialOffer === true;
        },
      },
      expirationDate: {
        type: Date,
        required: function () {
          return this.specialOffer.isSpecialOffer === true;
        },
      },
    },
    reviews: [reviewSchema],
  },
  { strict: true, timestamps: true }
);

const Product = model("Product", productSchema);

module.exports = Product;
