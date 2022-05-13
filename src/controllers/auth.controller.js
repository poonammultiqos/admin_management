const path = require("path");
exports.signin = async (req, res) => {
    try {
        console.log('route')
         res.render(path.join(__dirname, "../../src/views/auth", "signin.ejs"));
        // res.render("auth/signin.ejs");
    } catch (err) {
        console.log(err);
    }
};
