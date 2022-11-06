const measurement_repository = require('../Repository/MeasurementRepository')

// insert measurements of the users
module.exports = store_measurement = (io) => {
	let measurement = io.of('/measurements')

	measurement.on('connection', (socket) => {
		socket.use((_, next) => {
			console.log('middleware')
			next()
		})

		socket.on('user-training-measurements', (data) => {

			let p = measurement_repository.insert(data)

			console.log(p)
		})
	})
}
