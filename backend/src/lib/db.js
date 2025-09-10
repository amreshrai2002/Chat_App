import mongoose from 'mongoose'

// Connect Mongo Database
const connectDB = async (MONGODB_URI) => {
  try {
    const conn = await mongoose.connect(MONGODB_URI)
    console.log(`MongoDB connected: ${conn.connection.host}`)
    // console.log(conn)
  } catch (error) {
    console.log(`MongoDB connection error: ${error}`)
  }
}

export default connectDB
