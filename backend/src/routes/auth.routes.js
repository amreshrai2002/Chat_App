import express from 'express'

import {
  signup,
  login,
  logout,
  updateProfilePic,
} from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/signup', signup)

router.post('/login', login)

router.post('/logout', logout)

router.put('/update-profile-pic', updateProfilePic)

export default router
