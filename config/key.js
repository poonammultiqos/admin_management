require("dotenv").config();
let key = (process.env.ENVIRONMENT).toUpperCase();
module.exports = {
    PORT: eval(`process.env.PORT_${key}`)
}