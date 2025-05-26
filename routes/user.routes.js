const router = require("express").Router();
const { registerUser, loginUser } = require("../controller/user.controlletr");

router.post("/register",registerUser);
router.post("/login",loginUser);

module.exports = router;