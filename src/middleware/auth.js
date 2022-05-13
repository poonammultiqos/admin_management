//  demo for Node.js Express Rest API example that supports Token Based Authentication with JSONWebToken (JWT).
var router = require("express").Router();
const controller = require("../controllers/auth.controller");
router.get("/signin", controller.signin);


module.exports = router;