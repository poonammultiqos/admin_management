let userModel = require('../models/user.model');
let bcrypt = require("bcryptjs");
module.exports = {
    run: () =>
        new Promise((resolve) => {
            (async () => {
                let user = [
                    {
                        "first_name": "superadmin",
                        "last_name":  "superadmin",
                        "email": "superadmin@gmail.com",
                        "password": bcrypt.hashSync("superadmin@123"),
                        "role_id": "1",
                        "status":  "1",
                    },
                    {
                        "first_name": "admin",
                        "last_name":  "admin",
                        "email": "admin@gmail.com",
                        "password": bcrypt.hashSync("admin@123"),
                        "role_id": "2",
                        "status":  "1",
                    },
                    {
                        "first_name": "bdm",
                        "last_name":  "bdm",
                        "email": "bdm@gmail.com",
                        "password": bcrypt.hashSync("bdm@123"),
                        "role_id": "3",
                        "status":  "1",
                    },
                    {
                        "first_name": "bde",
                        "last_name":  "bde",
                        "email": "bde@gmail.com",
                        "password": bcrypt.hashSync("bde@123"),
                        "role_id": "4",
                        "status":  "1",
                    },

                ]

                await userModel.insertMany(user);
                resolve(true);
            })();
        }),
};

