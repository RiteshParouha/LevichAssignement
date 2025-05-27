const router = require("express").Router();
const AuthRoutes = require("./auth.routes.js");
const UserRoutes = require("./user.routes.js");
const CommentRoutes= require("./comment.routes.js");

router.use("/auth", AuthRoutes);
router.use("/user", UserRoutes);
router.use("/comment", CommentRoutes);

module.exports = router;
