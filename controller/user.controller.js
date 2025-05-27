const userService = require("../service/user.service");

const userPermissions = async (req, res, next) => {
  const { id } = req.params;
  const { permissions } = req.body;

  try {
   const user = await userService.updatePermissions(id, permissions)
    res.status(200).json({ message: "Permissions updated", permissions: user.permissions });
  } catch (err) {
    next(err);
  }
};

module.exports = {
    userPermissions
}