const { response } = require("express")

// Retrieve measurements of the class
const retrieve = (_, res = response) => {
	res.json({
		result: "Hi !!!"
	})
}

module.exports = {
	retrieve
}
