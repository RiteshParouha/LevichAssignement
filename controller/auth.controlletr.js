const {
  generateAccessToken,
  generateRefreshToken,
} = require("../model/token.service");
const userService = require("../service/user.service");

async function registerUser(req, res, next) {
  try {
    const user = req.body;
    const result = await userService.register(user);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
}

async function loginUser(req, res, next) {
  try {
    const user = req.body;

    const result = await userService.authenticate(user);

    const token = generateAccessToken(result);

    const refreshToken = generateRefreshToken(result);

    await userService.storeToken(result._id, refreshToken);

    res.status(200).json({
      user: {
        name: result.name,
        email: result.email,
      },
      token: { access: token, refresh: refreshToken },
    });
  } catch (error) {
    next(error);
  }
}

async function refreshToken(req, res, next) {
  try {
    const user = req.user;
    const token = generateAccessToken(user);

    res.status(200).json({
      token: { access: token, refresh: user.refresh_token },
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  registerUser,
  loginUser,
  refreshToken,
};
