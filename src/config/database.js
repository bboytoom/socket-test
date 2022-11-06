const AWS = require('aws-sdk')

AWS.config.update({
	region: process.env.REGION
})

module.exports = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'})
