const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const payload = {
    name: user.name,
    email: user.email
  };

  const secret = process.env.JWT_SECRET;
  const options = { expiresIn: "3h" };

  return jwt.sign(payload, secret, options);
};

module.exports = { generateToken };
