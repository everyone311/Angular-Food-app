const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

mongoose
    .connect("mongodb://127.0.0.1:27017/AngularDB")
    .then((x) => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );
    })

    .catch((err) => {
        console.error("Error connecting to mongo", err.reason);
    });

const routing = require("./routes/login.routes");

const app = express();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(cors());

app.use(
    express.static(path.join(__dirname, "dist/Server"))
);

// API root
app.use("/api", routing);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("Listening on port " + port);
});

// 404 Handler
app.use((req, res, next) => {
    next(createError(404));
});

// Base Route
app.get("/", (req, res) => {

    res.send("invaild endpoint");
});

app.get("*", (req, res) => {
    res.sendFile(
        path.join(__dirname, "dist/Server/index.html")
    );
});

// error handler
app.use(function (err, req, res, next) {
    console.log("S")
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});