const jwt = require("jsonwebtoken");

const generateAccessToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.ACCESS_SECRET, {
    expiresIn: "30m",
  });
};

const generateRefreshToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.REFRESH_TOKEN, {
    expiresIn: "7d",
  });
};

module.exports = { generateAccessToken, generateRefreshToken };
