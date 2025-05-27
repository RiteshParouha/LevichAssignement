const User = require("../model/user.model");

const updatePermissions = async (userId, permissions) => {
  const allowedPermissions = ["read", "write", "delete"];
  const isValid =
    Array.isArray(permissions) &&
    permissions.every((p) => allowedPermissions.includes(p));

  if (!isValid) {
    throw { code: 400, message: "Invalid permissions provided" };
  }
  const user = await User.findByIdAndUpdate(
    userId,
    { permissions },
    { new: true }
  );

  if (!user) {
    throw { code: 404, message: "User not found" };
  }
  return user;
};

module.exports = {
  updatePermissions,
};
