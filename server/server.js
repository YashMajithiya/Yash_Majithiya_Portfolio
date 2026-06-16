const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const contactRoutes = require('./routes/contact')

const app = express()
const PORT = process.env.PORT || 5000

// Allowed origins — add your Vercel URL here after deployment
const allowedOrigins = [
  'http://localhost:5173',
  process.env.CLIENT_URL,
].filter(Boolean)

app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.includes(origin)) return cb(null, true)
    cb(new Error('Not allowed by CORS'))
  },
}))

app.use(express.json())

// Routes
app.use('/api/contact', contactRoutes)

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }))

// Connect to MongoDB then start server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err)
    process.exit(1)
  })
