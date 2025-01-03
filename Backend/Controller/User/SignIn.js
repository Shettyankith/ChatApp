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
      res.status(404).json({
        error: true,
        success: false,
        message: "User not found",
      });
    }

    // password do not match
    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatch) {
      res.status(400).json({
        error: true,
        success: false,
        message: "Incorrect User or Password",
      });
    }

    generateToken(existingUser._id, res);
    res.status(200).json({
      error: false,
      success: true,
      message: "User logged in successfully!",
      user: existingUser,
    });
  } catch (e) {
    res.status(500).json({
      error: true,
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default SignIn;
