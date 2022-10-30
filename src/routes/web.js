const { Router } = require('express')

// Controllers
const { retrieve } = require('../controllers/measurements')
const web = Router()

web.get('/measurements', retrieve)

module.exports = web
