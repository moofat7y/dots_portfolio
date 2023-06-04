const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  const header = req.headers?.authorization;
  try {
    if (!header || !header?.startsWith("Bearer")) {
      const error = new Error("You are not authonticated");
      error.statusCode = 403;
      throw error;
    }
    const token = header.split(" ")[1];
    const decodedToken = jwt.verify(
      token,
      process.env.ACCESS_SECRET,
      {},
      (err, decodedToken) => {
        if (err) {
          const error = new Error(err.message);
          error.stack = err.stack;
          error.statusCode = 401;
          throw error;
        }
        return decodedToken;
      }
    );
    const user = await User.findById(decodedToken?.id);
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 417;
      throw error;
    }
    req.user = { _id: user._id, email: user.email, role: user.role };
    next();
  } catch (error) {
    next(error);
  }
};

const isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      const error = new Error("You are not admin");
      error.statusCode = 403;
      throw error;
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { isAuth, isAdmin };
