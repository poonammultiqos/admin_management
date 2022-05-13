require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const {PORT} = require("./config/key");
const cors = require("cors");

const session = require('express-session');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!", resave: true,
    saveUninitialized: true}));

var corsOptions = { origin: "http://localhost:8081" };
app.use(cors(corsOptions));

const path = require("path");
app.set("views", path.join(`${__dirname}/src`, "views"));
app.set("view engine", "ejs");

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log("server listening on port:", PORT);
});
app.get("/", (req, res) => {
    res.json({ message: "Welcome" });
});
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//include routes
const userRoute = require("./src/routes/auth.route");
app.use("/users",userRoute);