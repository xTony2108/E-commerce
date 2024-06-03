const jwt = require("jsonwebtoken");
const User = require("../db/models/User");

const verifyUserAuth = async (req, res, next) => {
  const bearerToken = req.headers.authorization;

  if (!bearerToken) {
    return res.status(401).json({ message: "Non sei autorizzato!" });
  }

  const token = bearerToken.replace("Bearer ", "");
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findById(
      { _id: decoded.id },
      "-password -__v -createdAt -updatedAt",
      { lean: true }
    );

    if (!user) {
      return res.status(401).json({ message: "Non sei autorizzato!" });
    } else {
      req.user = user;
      return next();
    }
  } catch (error) {
    return res.status(401).json({ message: "Non sei autorizzato!" });
  }
};

module.exports = { verifyUserAuth };
