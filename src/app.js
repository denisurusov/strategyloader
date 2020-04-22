"use strict";
exports.__esModule = true;
var middleware = require("./loader/middleware");
var strategySchema_1 = require("./schema/strategySchema");
//
var express = require("express");
var capabilitySchema_1 = require("./schema/capabilitySchema");
//connect to mongo
middleware.connect().then(function () {
    console.log("yay");
});
//initialize rest API server
var app = express();
var port = 8080;
app.listen(port, function () { return console.log("API server started"); });
/* TODO this could be done in a more elegant way with
a) Express router to route API name to a middleware function and
b) a middleware function that would fetch a collection with name mapped to API URL name
 */
//@http://localhost:3000/strategy call
app.get("/strategy", function (req, res) {
    strategySchema_1.loadStrategies().then(function (result) {
        res.json(result);
    })["catch"](function (err) {
        res.req.send(err);
    });
});
//@http://localhost:3000/capability call
app.get('/capability', function (req, res) {
    capabilitySchema_1.loadCapabilities().then(function (result) {
        res.json(result);
    })["catch"](function (err) {
        res.req.send(err);
    });
});
app.get('/test', function (req, res) {
    res.send("Online.");
});
