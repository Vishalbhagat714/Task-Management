const User = require("../models/user.model");
const { generateToken } = require("../utils/tokenUtils");

// Register User
const registerUser = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const newUser = new User({ email, password, role });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error registering user.", details: error.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.isValidPassword(password))) {
      return res.status(401).json({ error: "Invalid credentials." });
    }
    const token = generateToken(user._id, user.role);
    res.json({
      token,
      user: { id: user._id, email: user.email, role: user.role },
    });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error logging in.", details: error.message });
  }
};

module.exports = { registerUser, loginUser };
