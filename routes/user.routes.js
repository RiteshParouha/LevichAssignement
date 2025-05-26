const router = require("express").Router();
const { registerUser } = require("../controller/user.controlletr");

router.get("/register",registerUser)

module.exports = router;