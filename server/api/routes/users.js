const express = require("express");
const app = express.Router();

const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../db/models/User");
const { verifyUserAuth } = require("../../middleware/verifyUserAuth");
const { SECRET_KEY } = process.env;

/**
 * @path /api/users/register
 */

app.post("/register", async (req, res) => {
  const schema = Joi.object().keys({
    name: Joi.string().required().messages({
      "any.required": "• Inserire nome",
      "string.empty": "• Inserire nome",
    }),
    email: Joi.string().email().required().messages({
      "any.required": "• Inserire un indirizzo email valido",
      "string.empty": "• Inserire un indirizzo email valido",
      "string.email": "• Inserire un indirizzo email valido",
    }),
    password: Joi.string()
      .required()
      .pattern(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/
      )
      .messages({
        "any.required":
          "• Password deve contenere una lettera maiuscola, una minuscola, un numero e almeno 8 caratteri",
        "string.empty":
          "• Password deve contenere una lettera maiuscola, una minuscola, un numero e almeno 8 caratteri",
        "string.pattern.base":
          "• Password deve contenere una lettera maiuscola, una minuscola, un numero e almeno 8 caratteri",
      }),
    confirmPassword: Joi.string()
      .required()
      .pattern(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/
      )
      .messages({
        "any.required": "• Inserire conferma password",
        "string.empty": "• Inserire conferma password",
        "string.pattern.base":
          "• Password deve contenere una lettera maiuscola, una minuscola, un numero e almeno 8 caratteri",
      }),
    // country: Joi.string().required().messages({
    //   "any.required": "• Inserire paese",
    //   "string.empty": "• Inserire paese",
    // }),
    // address: Joi.string().required().messages({
    //   "any.required": "• Inserire un indirizzo valido",
    //   "string.empty": "• Inserire un indirizzo valido",
    // }),
    // civic: Joi.string().required().messages({
    //   "any.required": "• Inserire civico",
    //   "string.empty": "• Inserire civico",
    // }),
    // zipCode: Joi.string().required().min(5).messages({
    //   "any.required": "• Inserire cap valido",
    //   "string.empty": "• Inserire cap valido",
    //   "string.min": "• Inserire cap valido",
    // }),
    // phone: Joi.string()
    //   .required()
    //   .pattern(/^\+?(39|0039)?[ ]?[0-9]{2,4}[ ]?[0-9]{6,8}$/)
    //   .messages({
    //     "any.required": "• Inserire numero di cellulare valido",
    //     "string.empty": "• Inserire numero di cellulare valido",
    //     "string.pattern.base": "• Inserire numero di cellulare valido",
    //   }),
  });
  try {
    const user = await schema.validateAsync(req.body);

    user.email = user.email.toLowerCase();

    const comparePassword = user.password === user.confirmPassword;

    if (!comparePassword)
      return res
        .status(403)
        .json({ message: "Le password inserite non corrispondono!" });

    user.password = await bcrypt.hash(user.password, 12);

    const findUser = await User.findOne({ email: user.email }, "email", {
      lean: true,
    });

    if (findUser) {
      return res
        .status(403)
        .json({ message: "Indirizzo email già registrato" });
    }

    await User.create(user);

    return res
      .status(201)
      .json({ user, message: "Utente registrato con successo!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

app.post("/login", async (req, res) => {
  const schema = Joi.object().keys({
    email: Joi.string().email().required().messages({
      "any.required": "• Inserire un indirizzo email valido",
      "string.empty": "• Inserire un indirizzo email valido",
      "string.email": "• Inserire un indirizzo email valido",
    }),
    password: Joi.string().required().messages({
      "any.required": "• Inserire password",
      "string.empty": "• Inserire password",
    }),
    remember: Joi.bool(),
  });
  try {
    const data = await schema.validateAsync(req.body);

    data.email = data.email.toLowerCase();

    const user = await User.findOne(
      { email: data.email },
      "_id email password",
      {
        lean: true,
      }
    );

    if (!user) {
      return res.status(403).json({ message: "Credenziali errate!" });
    }

    const compare = await bcrypt.compare(data.password, user.password);

    if (!compare) {
      return res.status(403).json({ message: "Credenziali errate!" });
    }

    const token = jwt.sign({ email: user.email, id: user._id }, SECRET_KEY, {
      expiresIn: data.remember ? "999y" : "2h",
    });

    return res.status(200).json({
      user: { email: user.email, id: user._id, token },
      message: "Login effettuato con successo!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

app.get("/me", verifyUserAuth, async (req, res) => {
  const { user } = req;
  try {
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

module.exports = app;
