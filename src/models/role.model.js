const dynamoose = require("dynamoose");

const RoleSchema = new dynamoose.Schema({
        "id":{
            type:String,
            hashKey: true,
            required: true,
        },
        "name": {
            type: String,
            required: true
        }
    },
    {
        "timestamps": {
            "createdAt": ["createDate", "creation"],
            "updatedAt": ["updateDate", "updated"]
        },
    });

module.exports = dynamoose.model('roles', RoleSchema);
