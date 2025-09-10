import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

export const protectRoute = async (req, res, next) => {
  const { token } = req.body
  try {
    if (!token) {
      return res
        .status(401)
        .json({ message: 'Unauthorized - No Token Provided' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if(!decoded)
  } catch (error) {
    console.log('Error in auth middleware :', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
