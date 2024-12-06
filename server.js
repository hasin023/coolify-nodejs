require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")

// PORT
const PORT = process.env.APP_PORT || 3000

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Static Data
const { mahin, nahiyan, tushar } = require("./models/messages")

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Goodbye fuked up World 🌍" })
})

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to this useless API ✅" })
})

app.get("/api/tushar", (req, res) => {
  res.json({
    message: "Messages for Tushar Bhaii 🍣",
    messages: tushar,
  })
})

app.get("/api/mahin", (req, res) => {
  res.json({
    message: "Messages for Mahin 🔥🔥",
    messages: mahin,
  })
})

app.get("/api/nahiyan", (req, res) => {
  res.json({
    message: "Messages for Nahiyan 🌈🌈",
    messages: nahiyan,
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    message: "Something went wrong!",
    error: err.message,
  })
})

// Listen to the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
