const express = require("express");
const app = express();

const routing = express.Router();
// let Login = require("../model/Login");
let Register = require("../model/Register");


const UserController = require('../controllers/usercheck');

routing.post('/login', async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    console.log(username, password);
    const result = await UserController.checkUser(username, password);

    console.log("result", result)

    if (result.error) {
        return res.status(401).json({ error: result.error });

    }

    return res.status(200).json({ user: result, message: "User valid" });
});




routing.route("/register").post((req, res, next) => {

    Register.create(req.body)

        .then((data) => {
            res.json({
                data: data,
                message: "User Registered Successfully"
            })
        })
        .catch((error) => {
            return next(error)
        })
})

module.exports = routing;