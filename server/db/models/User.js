const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, strict: true }
);

const User = model("User", userSchema);

module.exports = User;

// country: {
//   type: String,
//   required: true,
// },
// address: {
//   type: String,
//   required: true,
// },
// civic: {
//   type: String,
//   required: true,
// },
// zipCode: {
//   type: String,
//   required: true,
// },
// phone: {
//   type: String,
//   required: true,
// },
