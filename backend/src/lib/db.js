import mongoose from "mongoose";

// Connect Mongo Database
export const connectDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  try {
    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
    // console.log(conn)
  } catch (error) {
    console.log(`MongoDB connection error: ${error}`);
  }
};
