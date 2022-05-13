const mongoose = require("mongoose");
const {DB_AUTH_URL} = require("../../config/key");
mongoose.connect(DB_AUTH_URL, {
    keepAlive:true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

mongoose.connection.on("error", (err) => {
    console.log("err", err);
    throw err;
});

mongoose.connection.on("connected", () => {
    console.log("Mongoose is connected");
});

module.exports = {mongoose}