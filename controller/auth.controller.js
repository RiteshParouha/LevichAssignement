const {
  generateAccessToken,
  generateRefreshToken,
} = require("../model/token.service");
const authService = require("../service/auth.service");

async function registerUser(req, res, next) {
  try {
    const user = req.body;
    const result = await authService.register(user);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
}

async function loginUser(req, res, next) {
  try {
    const user = req.body;

    const result = await authService.authenticate(user);

    const token = generateAccessToken(result);

    const refreshToken = generateRefreshToken(result);

    await authService.storeToken(result._id, refreshToken);

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

async function logoutUser(req, res, next) {
  try {
    const user = req.user;

    const updatedUser = await authService.removeRefreshToken(user._id);

    res.status(200).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    next(error);
  }
}

async function requestForgot(req, res, next) {
  try {
    const { email } = req.params;
    const user = await authService.getUserByEmail(email);

    res.json({
      accessCode: 2558,
    });
  } catch (error) {
    next(error);
  }
}

async function updatePassword(req, res, next) {
  try {
    const { accessCode, password, confirmPassword, email } = req.body;

  if (accessCode != 2558) {
    throw { code: 401, message: "Incorrect access code" };
  }

  if (password != confirmPassword) {
    throw {
      code: 400,
      message: "Password and confirm password should be equal",
    };
  }

  const result = await authService.updatePassword(email, password);

  if (result)
    res.json({
      message: "Password updated successfully",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  registerUser,
  loginUser,
  refreshToken,
  logoutUser,
  requestForgot,
  updatePassword
};
