import express from 'express'

const app = express()
const PORT = process.PORT || 3000

app.get('/', (req, res) => {
  res.send('Sever is running on port!')
})
app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`)
})
