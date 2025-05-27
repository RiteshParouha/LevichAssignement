const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  const payload = {
    userId : user._id
  };

  const secret = process.env.JWT_ACCESS_SECRET;
  const options = { expiresIn: "10m" };

  return jwt.sign(payload, secret, options);
};

const generateRefreshToken = (user) => {
  const payload = {
    userId : user._id
  };

  const secret = process.env.JWT_REFRESH_SECRET;
  const options = { expiresIn: "7d" };

  return jwt.sign(payload, secret, options);
};

module.exports = { generateAccessToken, generateRefreshToken };
