import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import connectDB from './lib/db.js'
import authRoutes from './routes/auth.routes.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI

app.use(express.json())
app.use(cookieParser())

app.use('/', (req, res, next) => {
  // console.log(req)
  next()
})
app.use('/auth', authRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`)
  connectDB(MONGODB_URI)
})
