const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 12),
    username: req.body.username,
    ...req.body,
  });

  try {
    const user = await newUser.save();
    res.json(user);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) res.status(400).json("Incorrect email");

    // const userPassword = await bcrypt.compare(req.body.password, user.password);
    // if (!userPassword) res.status(400).json("Invalid password");

    const { password, ...info } = user._doc;
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.ACCESSTOKEN_SECRET,
      { expiresIn: "5d" }
    );

    res.json({ ...info, accessToken });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
