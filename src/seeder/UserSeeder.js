const AWS = require("aws-sdk");
const config = require('../../src/connection/db');
AWS.config.update(config.aws_remote_config);

var dynamodb = new AWS.DynamoDB();

// aws dynamodb batch-write-item
module.exports = {
    run: () =>
        new Promise((resolve) => {
            (async () => {
                let params = {
                    RequestItems: {
                        "users": [
                            {
                                PutRequest: {
                                    Item: {
                                        "first_name": {S: "superadmin"},
                                        "last_name": {S: "superadmin"},
                                        "email": {S: "superadmin@gmail.com"},
                                        "password": {S: "superadmin@123"},
                                        "role_id": {N: "1"},
                                        "status": {N: "1"},
                                    }
                                }
                            },
                            {
                                PutRequest: {
                                    Item: {
                                        "first_name": {S: "admin"},
                                        "last_name": {S: "admin"},
                                        "email": {S: "admin@gmail.com"},
                                        "password": {S: "admin@123"},
                                        "role_id": {S: "2"},
                                        "status": {S: "1"},
                                    }
                                }
                            },
                            {
                                PutRequest: {
                                    Item: {
                                        "first_name": {S: "bdm"},
                                        "last_name": {S: "bdm"},
                                        "email": {S: "bdm@gmail.com"},
                                        "password": {S: "bdm@123"},
                                        "role_id": {S: "3"},
                                        "status": {S: "1"},
                                    }
                                }
                            },
                            {
                                PutRequest: {
                                    Item: {
                                        "first_name": {S: "bde"},
                                        "last_name": {S: "bde"},
                                        "email": {S: "bde@gmail.com"},
                                        "password": {S: "bde@123"},
                                        "role_id": {S: "4"},
                                        "status": {S: "1"},
                                    }
                                }
                            },
                        ]
                    }
                };
                dynamodb.batchWriteItem(params);
                resolve(true);
            })();
        }),
};
