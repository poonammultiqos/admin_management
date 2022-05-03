const dynamoose = require("dynamoose");

const StageSchema = new dynamoose.Schema({
        "id":{
            type:String,
            hashKey: true,
            required: true,
        },
        "name": {
            type: String,
            rangeKey: true,
            required: true
        }
    },
    {
        "timestamps": {
            "createdAt": ["createDate", "creation"],
            "updatedAt": ["updateDate", "updated"]
        },
    });

module.exports = dynamoose.model('roles', StageSchema);
