const dynamoose = require("dynamoose");

const CountrySchema = new dynamoose.Schema({
        "id": {
            type: String,
            hashKey: true,
            required: true,
        },
        "name": {
            type: String,
            required: true
        },
        "code": {
            type: Number
        }
    },
    {
        "timestamps": {
            "createdAt": ["createDate", "creation"],
            "updatedAt": ["updateDate", "updated"]
        },
    });

module.exports = dynamoose.model('countries', CountrySchema);
