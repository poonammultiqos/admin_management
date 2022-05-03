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
                        "leads": [
                            {
                                PutRequest: {
                                    Item: {
                                        "sales_person_name": {S: "Poonam"},
                                        "client_name": {S: "Pihu"},
                                        "country_id": {N: "1"},
                                        "title": {S: "Project1"},
                                        "add_time": {Date: "1/1/2022"},
                                        "close_time": {Date: "30/1/2022"},
                                        "lost_time": {Date: "15/1/2022"},
                                        "update_time": {Date: "20/1/2022"},
                                        "next_activity_subject": {S: "activity subject"},
                                        "lead_type": {S: "unbound"},
                                        "stage_id": {N: "1"},
                                        "stage_add_time": {Date: "1/1/2022"},
                                        "stage_update_time": {Date: "11/1/2022"},
                                        "status": {S: "won"},
                                    }
                                }
                            }
                        ]
                    }
                };
                dynamodb.batchWriteItem(params);
                resolve(true);
            })();
        }),
};
