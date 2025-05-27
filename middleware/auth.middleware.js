const jwt = require("jsonwebtoken");
const User = require("../model/user.model");

const authenticateUser = async (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];

  if (!token) {
    return res.status(401).send({ message: "Access token is required" });
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

    const user = await User.findById(payload.userId);

    if (!user?.refresh_token) {
      return res.status(401).json({
        message: "User is not logged-in",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

const authenticateRefreshToken = async (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];

  if (!token) {
    return res.status(401).send({ message: "Refresh token is required" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET);

    const user = await User.findById(payload.userId);

    if (user?.refresh_token !== token) {
      return res.status(401).json({
        message: "Invalid token passed",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  authenticateUser,
  authenticateRefreshToken,
};
