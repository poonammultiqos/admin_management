const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema({
        "id": {
            type: String,
        },
        "name": {
            type: String,
            required: true
        },
        "code": {
            type: String
        }
    },
    {
        "timestamps": {
            "createdAt": ["createDate", "creation"],
            "updatedAt": ["updateDate", "updated"]
        },
    });

module.exports = mongoose.model('countries', CountrySchema);
