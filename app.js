require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const {PORT} = require("./config/key");

server.listen(PORT, () => {
    console.log("server listening on port:", PORT);
});