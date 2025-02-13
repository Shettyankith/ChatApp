import User from "../../Models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../../jwt/generateToken.js";

const SignIn = async (req, res) => {
  try {
    // validations
    const { email, password } = req.body;
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

    // checking whether user exists or not
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        error: true,
        success: false,
        message: "Hmm… We don’t recognize that email. Sure it's you? 🤔",
      });
    }

    // password do not match
    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatch) {
      return res.status(400).json({
        error: true,
        success: false,
        message: "Invalid credentials! Maybe your keyboard was playing tricks? 🎭",
      });
    }

    generateToken(existingUser._id, res);
    return res.status(200).json({
      error: false,
      success: true,
      message: "User logged in successfully!",
      user: {
        _id:existingUser._id,
        username:existingUser.username,
        email:existingUser.email,
        profilePic:existingUser.profilePic,
        bio:existingUser.bio,
      },
    });
  } catch (e) {
    return res.status(500).json({
      error: true,
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default SignIn;
