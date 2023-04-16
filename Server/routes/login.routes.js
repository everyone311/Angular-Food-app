const express = require("express");
const app = express();

const routing = express.Router();
// let Login = require("../model/Login");
let Register = require("../model/Register");

// routing.route("/login").post((req, res, next) => {

//     Login.create(req.body)

//         .then((data) => {
//             res.json(data)
//         })
//         .catch((error) => {
//             return next(error)
//         })
// })


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