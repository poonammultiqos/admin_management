const mongoose = require("mongoose");

const AmountSchema = new mongoose.Schema({
        "id": {
            type: String,
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

module.exports = mongoose.model('amounts', AmountSchema);
