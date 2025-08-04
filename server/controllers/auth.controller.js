import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password." });
    }
    const isMatched = await user.comparePassword(password);
    if (!isMatched) {
      return res.status(401).json({ error: "Invalid email or password." });
    }
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'Lax',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });
    
    const { _id, name, email: userEmail, bio, role } = user;
    return res.status(200).json({ user: { _id, name, email: userEmail, bio, role } });
  } catch (error) {
    console.log("Error during login.", error);
    return res.status(500).json({ error: "Server error during login." });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, bio } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "Email already exists." });
    }
    const user = new User({ name, email, password, bio });
    await user.save();

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    const { name: userName, email: userEmail, bio: userBio, _id, role } = user;
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'Lax',
        maxAge: 7 * 24 * 60 * 60 * 1000
      })
    return res
      .status(201)
      .json({user: { _id, name: userName, email: userEmail, bio: userBio, role }})
  } catch (error) {
    return res.status(401).json({ error: "Error while registering." });
  }
};
