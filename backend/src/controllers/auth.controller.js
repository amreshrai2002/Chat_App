import bcrypt from 'bcryptjs'

import { genreateToken } from '../lib/utils.js'
import User from '../models/user.model.js'

export const signup = async (req, res) => {
  console.log('Entered in SignUp controller', req.body)

  const { fullName, email, password, confirmPassword } = req.body
  try {
    // Hash Password
    if (!password || !email || !fullName || !confirmPassword) {
      return res.status(400).json({ message: 'Empty fields are not valid!' })
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: 'Password must be at least 6 characters' })
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ message: 'Password and confirm password are not same!' })
    }

    const user = await User.findOne({ email })
    if (user) return res.status(400).json({ message: 'Email already exists' })

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    })

    if (newUser) {
      // Generate JWT token here
      genreateToken(newUser._id, res)
      await newUser.save()

      res.status(200).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      })
    } else {
      res.status(400).json({ message: 'Invalid user data' })
    }
  } catch (error) {
    console.log('Error in signup controller :', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

export const login = async (req, res) => {
  console.log('Entered in Login controller', req.body)
  const { email, password } = req.body
  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Empty fields are not valid!' })
    }

    const user = await User.findOne({ email })
    console.log(' User: ', user)
    if (!user) {
      return res.status(400).json({ message: 'User is not present!' })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    console.log(' isPasswordCorrect: ', isPasswordCorrect)
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Password is wrong!' })
    }

    const token = genreateToken(user._id, res)
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic,
    })
  } catch (error) {
    console.log('Error in login controller :', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

export const logout = (req, res) => {
  // const { userId } = req.body
  try {
    res.cookie('jwt', '', { maxAge: 0 })
    res.status(200).json({ message: 'Logged out successfully' })
  } catch (error) {
    console.log('Error in logout controller :', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

export const updateProfilePic = (req, res) => {
  const { imageUrl, email } = req.body
  try {
    if (!imageUrl) {
      return res.status(400).json({ message: 'Empty fields are not valid!' })
    }

    const user = User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'User is not present' })
    }
  } catch (error) {
    console.log('Error in updateProfilePic controller :', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
