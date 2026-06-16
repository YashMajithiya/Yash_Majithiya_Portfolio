const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact')

// POST /api/contact — save a message
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address.' })
    }

    const contact = await Contact.create({
      name: name.trim().slice(0, 100),
      email: email.trim().slice(0, 200),
      message: message.trim().slice(0, 2000),
      ip: req.ip,
    })

    res.status(201).json({ success: true, id: contact._id })
  } catch (err) {
    console.error('Contact error:', err)
    res.status(500).json({ error: 'Server error. Please try again.' })
  }
})

module.exports = router
