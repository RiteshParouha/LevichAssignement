const router = require("express").Router();
const AuthRoutes = require("./auth.routes.js");
const UserRoutes = require("./user.routes.js");

router.use("/auth", AuthRoutes);
router.use("/user", UserRoutes);

module.exports = router;
