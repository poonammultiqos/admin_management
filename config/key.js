require("dotenv").config();
let key = (process.env.ENVIRONMENT).toUpperCase();
module.exports = {
    PORT: eval(`process.env.PORT_${key}`),
    DB_AUTH_URL: eval(`process.env.DB_AUTH_URL_${key}`)
}