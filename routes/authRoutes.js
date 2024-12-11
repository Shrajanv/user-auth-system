const express = require("express");
const { body } = require("express-validator");
const {
  registerUser,
  loginUser,
  resetPassword,
} = require("../controllers/authController");

const router = express.Router();

// Registration Route
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  ],
  registerUser
);

// Login Route
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  loginUser
);

// Reset Password Route
router.post(
  "/reset-password",
  [body("email").isEmail().withMessage("Invalid email")],
  resetPassword
);

module.exports = router;
