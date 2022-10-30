
// insert measurements of the users
module.exports = store_measurement = (io) => {
	let measurement = io.of('/measurements')

	measurement.on('connection', (socket) => {
		socket.use((_, next) => {
			console.log('middleware')
			next()
		})

		socket.on('user-training-measurements', (data) => {
			console.log(data)
		})
	})
}
