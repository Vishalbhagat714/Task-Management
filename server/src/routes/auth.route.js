const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth.controller");
const authenticateJWT = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
