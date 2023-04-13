const express = require("express");
const app = express();

const routing = express.Router();
let Login = require("../model/Login");

routing.route("/login").post((req, res, next) => {
    Login.create(req.body)
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            return next(error)
        })
})

module.exports = routing;