require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const {PORT} = require("./config/key");
app.listen(PORT, () => {
    console.log("server listening on port:", PORT);
});
app.get("/", (req, res) => {
    res.json({ message: "Welcome" });
});
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

const AWS  = require("aws-sdk");
const config = require('./src/connection/db');
const docClient = new AWS.DynamoDB.DocumentClient();

//get users
const getUsers = function (req, res) {
    AWS.config.update(config.aws_remote_config);
    const params = { TableName: config.aws_table_name };

    docClient.scan(params, function (err, data) {

        if (err) {
            console.log(err)
            res.send({
                success: false,
                message: err
            });
        } else {
            const { Users } = data;
            res.send({
                success: true,
                users: Users
            });
        }
    });
}

module.exports = {
    getUsers
}
