require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")

// PORT
const PORT = process.env.APP_PORT

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Static Data
const users = require("./models/users")
const messages = require("./models/messages")

// Routes
app.get("/api/v1", (req, res) => {
  res.json({ message: "Welcome to the Coolify API" })
})

app.get("/api/v1/users", (req, res) => {
  res.json({
    message: "List of all users",
    users,
  })
})

app.get("/api/v1/messages", (req, res) => {
  res.json({
    message: "List of all messages",
    messages,
  })
})

// Listen to the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
