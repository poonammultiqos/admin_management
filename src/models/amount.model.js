const dynamoose = require("dynamoose");

const AmountSchema = new dynamoose.Schema({
        "id": {
            type: String,
            hashKey: true,
            required: true,
        },
        "lead_id": {
            type: String,
            required: true
        },
        "price": {
            type: Number,
            required: true,
        },
        "project_name": {
            type: String
        }
    },
    {
        "timestamps": {
            "createdAt": ["createDate", "creation"],
            "updatedAt": ["updateDate", "updated"]
        },
    });

module.exports = dynamoose.model('amounts', AmountSchema);
