const dynamo_db = require('../config/database')

class MeasurementRepository {
    constructor() {
        this.table_name = 'measurements'
    }

    async insert(data) {
        let params = {
            TableName: this.table_name,
            Item: {
                'channel': data.channel,
                'email': data.email,
                'user_uuid': data.user_uuid,
                'score': data.score
            }
        }

        return await dynamo_db.put(params, (err, data) => {
            if (err) {
                console.log(err)
                return JSON.stringify({'result': 'error to add item'})
            } else {
                return JSON.stringify(data)
            }
        })
    }
}

module.exports = new MeasurementRepository()
