const express = require("express");
const app = express();

const routing = express.Router();
let Login = require("../model/Login");

routing.route("/login").post((req, res, next) => {
    Login.create(req.body, (error, data))
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            return next(error)
        })
})

module.exports = routing;