const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
        "id":{
            type:String,
        },
        "first_name": {
            type: String,
            required: true,
        },
        "last_name" : {
            type : String,
            required : true,
        },
        "email" : {
            type : String,
            required : true,
        },
        "password" : {
            type : String,
        },
        "role_id" : {
            type : Number,
            required : true,
        },
        "status": {
            type: Number,
            default: 1,
            enum: [1, 2, 3], //1=Active 2=InActive 3=Deleted
        },
        "bdm_id" : { //if role is bde
            type : Number,
        }
    },
    {
        "timestamps": {
            "createdAt": ["createDate", "creation"],
            "updatedAt": ["updateDate", "updated"]
        },
    });

module.exports = mongoose.model('users', UserSchema);
