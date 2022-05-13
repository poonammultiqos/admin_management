const path = require("path");
const User = require("../models/user.model");

exports.signin = async (req, res) => {
    try {
         res.render(path.join(__dirname, "../../src/views/auth", "signin.ejs"));
        // res.render("auth/signin.ejs");
    } catch (err) {
        console.log(err);
    }
};

exports.login = async (req, res) => {
    try {
        let reqParam = req.body;
        let userExist = User.findOne({email: reqParam.email, status: 1});
        if (userExist){
            await res.render(path.join(__dirname, "../../src/views/auth", "dashboard.ejs"));
            return res.status(400);
        }
        await res.render(path.join(__dirname, "../../src/views/auth", "signin.ejs"));

    } catch (err) {
        console.log(err);
    }
};

