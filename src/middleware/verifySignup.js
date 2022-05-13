const User = require("../models/user.model");
const responseHelper = require('../helpers/response');

exports.checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
    User.findOne({
        firstname: req.body.firstname
    }).exec((err, user) => {
        if (err) {
            return responseHelper.error(res, err, 500);
        }
        if (user) {
            return responseHelper.error(res, "Failed! firstname is already in use!", 400);
        }
        // Email
        User.findOne({
            email: req.body.email
        }).exec((err, user) => {
            if (err) {
                return responseHelper.error(res, err, 500);
            }
            if (user) {
                return responseHelper.error(res, "Failed! Email is already in use!", 400);
            }
            next();
        });
    });
};
