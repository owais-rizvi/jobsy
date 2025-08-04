import { User } from "../models/user.model.js";

export const getMyInfo = async (req, res) => {
  try {
    const user = req.user; 
    return res.status(200).json(user);
  } catch (error) {
    console.log("Error during getting your information.", error);
    return res.status(500).json({ error: "Server error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).select("-password");
    return res.status(200).json(user);
  } catch (error) {
    console.log("Error while getting user info.", error);
  }
};
