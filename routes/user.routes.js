const router = require("express").Router();
const { registerUser, loginUser, refreshToken } = require("../controller/auth.controlletr");
const { authenticateRefreshToken } = require("../middleware/auth.middleware");

router.post("/register",registerUser);
router.post("/login",loginUser);
router.get('/refreshToken',authenticateRefreshToken,refreshToken)

module.exports = router;