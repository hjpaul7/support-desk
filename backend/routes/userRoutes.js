const express = require("express");
const router = express.Router();
const { protectedRoutes } = require("../middleware/authMiddleware");

const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protectedRoutes, getMe);

module.exports = router;
