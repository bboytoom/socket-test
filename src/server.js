const http = require('http');
const socket = require('socket.io')
require('dotenv').config()

const port = process.env.PORT || 3000
const app = require('./app')
const store = require('../src/events/insert_measurements')

// Create HTTP server.
const server = http.createServer(app)

// init socket
const io = socket(server, {})

// Socket functions
store_measurement(io)

server.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`)
})
