const mongoose = require("mongoose");

const StageSchema = new mongoose.Schema({
        "id":{
            type:String,
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

module.exports = mongoose.model('stages', StageSchema);
