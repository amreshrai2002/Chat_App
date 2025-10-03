import cloudinary from "../lib/cloudinary.js";
import { getReceiverSocketId, io } from "../lib/socket.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  const loggedInUserId = req.user._id;
  console.log("Entered in getUsersForSidebar authController :");
  console.log(loggedInUserId);
  try {
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    // console.log("filteredUsers:", filteredUsers);

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUsersForSidebar message controller :", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  console.log("Entered in getMessages messageController:");
  const userToChatId = req.params.id;
  const senderId = req.user._id;
  try {
    const messages = await Message.find({
      $or: [
        { senderId: senderId, recieverId: userToChatId },
        { senderId: userToChatId, recieverId: senderId },
      ],
    });

    console.log(messages);

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages message controller :", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const sendMessage = async (req, res) => {
  const { text, image } = req.body;
  const { id: recieverId } = req.params;
  const senderId = req.user._id;

  try {
    let imageUrl;
    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage = new Message({
      senderId,
      recieverId,
      text,
      image: imageUrl,
    });

    const response = await newMessage.save();

    const recieverSocketId = getReceiverSocketId(recieverId);
    if (recieverSocketId) {
      io.to(recieverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage messageController :", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
