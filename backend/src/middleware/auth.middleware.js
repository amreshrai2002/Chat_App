import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

export const protectRoute = async (req, res, next) => {
  const token = req.cookies.jwt
  console.log('protectRoute middleware : ', req.cookies.jwt)

  try {
    if (!token) {
      return res
        .status(401)
        .json({ message: 'Unauthorized - No Token Provided' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if (!decoded) {
      return res.status(400).json({ message: 'Unauthorized - Invalid Token' })
    }

    const user = await User.findOne({ _id: decoded.userId }).select('-password')
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    req.user = user
    next()
  } catch (error) {
    console.log('Error in auth middleware :', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

export default protectRoute
