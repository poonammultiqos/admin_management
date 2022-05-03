const AWS = require("aws-sdk");
const config = require('../../src/connection/db');
AWS.config.update(config.aws_remote_config);

var dynamodb = new AWS.DynamoDB();module.exports = {
    run: () =>
        new Promise((resolve) => {
            (async () => {
                // Reading xlsx file
                const reader = require('xlsx')
                const file = reader.readFile('./public/xlsx/Countrylist.xlsx') // Reading our test file
                let data = []
                const sheets = file.SheetNames
                for(let i = 0; i < sheets.length; i++)
                {
                    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
                    temp.forEach((res) => {
                        data.push(res)
                    })
                }

                //foreach for country name
                let array= [];
                let obj = {};
                for(let country of data){
                    obj.PutRequest = {
                        Item : {"name": {S: country.name}}
                    };
                    array.push(obj);
                }

                let params = {
                    RequestItems: {
                        "countries": array
                    }
                };

                dynamodb.batchWriteItem(params);
                resolve(true);
            })();
        }),
};
