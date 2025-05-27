const router = require("express").Router();
const {
  registerUser,
  loginUser,
  refreshToken,
  logoutUser,
  requestForgot,
  updatePassword
} = require("../controller/auth.controller");
const {
  authenticateRefreshToken,
  authenticateUser,
} = require("../middleware/auth.middleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/refreshToken", authenticateRefreshToken, refreshToken);
router.put("/logout", authenticateUser, logoutUser);

router.get("/requestForgot/:email",requestForgot);
router.put("/updatePassword",updatePassword)

module.exports = router;
