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
                        "stages": [
                            {
                                PutRequest: {
                                    Item: {
                                        "name": {S: "Waiting for client's reply"},
                                    }
                                }
                            },
                            {
                                PutRequest: {
                                    Item: {
                                        "name": {S: "Interview scheduled"},
                                    }
                                }
                            },
                            {
                                PutRequest: {
                                    Item: {
                                        "name": {S: "Interview Done"},
                                    }
                                }
                            },
                            {
                                PutRequest: {
                                    Item: {
                                        "name": {S: "Scope Sent"},
                                    }
                                }
                            },
                            {
                                PutRequest: {
                                    Item: {
                                        "name": {S: "Proposal Sent"},
                                    }
                                }
                            },
                            {
                                PutRequest: {
                                    Item: {
                                        "name": {S: "Ballpark Estimation Sent"},
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
