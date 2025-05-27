const User = require("../model/user.model");

const register = (user) => {
  if (!user) {
    throw { code: 400, message: "One or more required fields are missing" };
  }
  return User.create(user);
};

const authenticate = async (user) => {
  if (!user?.email || !user?.password) {
    throw { code: 400, message: "Email and password are required" };
  }

  const result = await User.findOne({ email: user.email });

  if (!result) {
    throw { code: 401, message: "Incorrect credentials" };
  }

  const isMatch = await result.comparePassword(user.password);

  if (!isMatch) {
    throw { code: 401, message: "Incorrect credentials" };
  }

  return result;
};

const storeToken = async (userId, refreshToken) => {
  if (!userId || !refreshToken) {
    throw { code: 400, message: "One or more required fields are missing" };
  }

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { refresh_token: refreshToken },
    { new: true }
  );

  if (!updatedUser) {
    throw { code: 404, message: "User not found" };
  }

  return updatedUser;
};

const removeRefreshToken = async (userId) => {
  if (!userId) {
    throw { code: 400, message: "One or more required fields are missing" };
  }

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { refresh_token: null },
    { new: true }
  );

  if (!updatedUser) {
    throw { code: 404, message: "User not found" };
  }

  return updatedUser;
};

const getUserByEmail = async (email) => {
  if (!email) {
    throw { code: 400, message: "One or more required fields are missing" };
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    throw { code: 404, message: "User not found" };
  }

  return user;
};

const updatePassword = async (email, password) => {
  if (!email || !password) {
    throw { code: 400, message: "One or more required fields are missing" };
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw { code: 404, message: "User not found" };
  }

  user.password = password;
  await user.save();

  return true;
};

module.exports = {
  register,
  authenticate,
  storeToken,
  removeRefreshToken,
  getUserByEmail,
  updatePassword
};
