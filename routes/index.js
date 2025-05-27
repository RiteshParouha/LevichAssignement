const router = require("express").Router();
const UserRoutes = require("./user.routes.js");

router.use("/auth",UserRoutes)

module.exports = router;