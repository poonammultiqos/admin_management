const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({
        "id": {
            type: String,
        },
        "sales_person_name": {
            type: String,
            required: true,
        },
        "client_name": {
            type: String,
            required: true,
        },
        "country_id": {
            type: Number,
            required: true,
        },
        "title": {
            type: String,
            required: true,
        },
        "add_time": {
            type: Date
        },
        "close_time": {
            type: Date
        },
        "lost_time": {
            type: Date
        },
        "update_time": {
            type: Date
        },
        "next_activity_subject": {
            type: String,
        },
        "lead_type": {
            type: String,
            default: "upbound",
            enum: ["inbound", "upbound"],
        },
        "stage_id": {
            type: Number,
            required: true,
        },
        "stage_add_time": {
            type: Date
        },
        "stage_update_time": {
            type: Date
        },
        "status": {
            type: String,
            default: 1,
            enum: ["lost", "won", "open"],
        },
    },
    {
        "timestamps": {
            "createdAt": ["createDate", "creation"],
            "updatedAt": ["updateDate", "updated"]
        },
    });

module.exports = mongoose.model('leads', LeadSchema);
