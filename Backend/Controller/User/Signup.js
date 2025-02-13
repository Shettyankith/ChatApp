import User from "../../Models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../../jwt/generateToken.js";
const saltRounds = 10;

const Signup = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    // input validations
    if (!username) {
      return res.status(206).json({
        error: true,
        success: false,
        message: "Username is required",
      });
    }

    if (!email) {
      return res.status(206).json({
        error: true,
        success: false,
        message: "Email is required",
      });
    }

    if (!password) {
      return res.status(206).json({
        error: true,
        success: false,
        message: "Password is required",
      });
    }

    if (!confirmPassword) {
      return res.status(206).json({
        error: true,
        success: false,
        message: "Confirm password is required",
      });
    }

    if (password !== confirmPassword) {
      return res.status(401).json({
        error: true,
        success: false,
        message: "Passwords do not match",
      });
    }

    // checking whether user already exists or not
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("That email is already taken. Maybe by your evil twin? 🧑‍🤝‍🧑")
      return res.status(403).json({
        error: true,
        success: false,
        message: "User already exists!",
      });
    }

    // hashing the password
    const hashedPass = await bcrypt.hash(password, saltRounds);
    const newUser = await new User({ username, email, password: hashedPass });
    await newUser.save();
    generateToken(newUser._id, res);
    res.status(201).json({
      error: false,
      success: true,
      message: "User registered successfully",
      user: {
        _id:newUser._id,
        username:newUser.username,
        email:newUser.email,
        profilePic:newUser.profilePic,
        bio:newUser.bio,
      },
    });
  } catch (e) {
    console.log(e.message)
    res.status(500).json({
      error: true,
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default Signup;
