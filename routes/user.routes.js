const router = require("express").Router();
const { userPermissions } = require("../controller/user.controller");
const {
  authenticateUser,
  checkPermission,
} = require("../middleware/auth.middleware");

router.put("/:id/permissions", authenticateUser ,checkPermission("write") ,userPermissions)

module.exports = router;
