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
                            "roles": [
                                {
                                    PutRequest: {
                                        Item: {
                                            "name": {S: "superadmin"},
                                        }
                                    }
                                },
                                {
                                    PutRequest: {
                                        Item: {
                                            "name": {S: "admin"},
                                        }
                                    }
                                },
                                {
                                    PutRequest: {
                                        Item: {
                                            "name": {S: "bdm"},
                                        }
                                    }
                                },
                                {
                                    PutRequest: {
                                        Item: {
                                            "name": {S: "bde"},
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
