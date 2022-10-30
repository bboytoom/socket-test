const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

// Public
app.use(express.static( path.resolve(__dirname, '../public') ))

// Cors
app.use(cors())

// Routes
app.use('/api/v2', require('./routes/web'))

module.exports = app
