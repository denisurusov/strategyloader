"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var middleware = require("./loader/middleware");
var strategySchema_1 = require("./schema/strategySchema");
//
var express = require("express");
//connect to mongo
middleware.connect();
//initialize rest API server
var app = express();
var port = 3000;
app.listen(port, function () { return console.log("API server started"); });
//@http://localhost:3000/strategy call
app.get('/strategy', function (req, res) {
    var promise = strategySchema_1.loadStrategies();
    promise.then(function (result) {
        res.json(result);
    }).catch(function (err) {
        res.req.send(err);
    });
});
