const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
        "id":{
            type:String,
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

module.exports = mongoose.model('roles', RoleSchema);
