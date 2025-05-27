const router = require("express").Router();
const { readComment, writeComment, deleteComment } = require("../controller/comment.controller");
const { userPermissions } = require("../controller/user.controller");
const {
  authenticateUser,
  checkPermission,
} = require("../middleware/auth.middleware");

router.get("/", authenticateUser,checkPermission("read"), readComment);

router.post("/", authenticateUser,checkPermission("write"), writeComment);

router.delete("/:id", authenticateUser ,checkPermission("delete"), deleteComment);

module.exports = router;
