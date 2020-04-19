"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const middleware = require("./loader/middleware");
const strategySchema_1 = require("./schema/strategySchema");
//
const express = require("express");
const capabilitySchema_1 = require("./schema/capabilitySchema");
//connect to mongo
middleware.connect().then(() => {
    console.log("yay");
});
//initialize rest API server
const app = express();
const port = 3000;
app.listen(port, () => console.log("API server started"));
//@http://localhost:3000/strategy call
app.get('/strategy', (req, res) => {
    strategySchema_1.loadStrategies().then(result => {
        res.json(result);
    }).catch(err => {
        res.req.send(err);
    });
});
//@http://localhost:3000/capability call
app.get('/capability', (req, res) => {
    capabilitySchema_1.loadCapabilities().then(result => {
        res.json(result);
    }).catch(err => {
        res.req.send(err);
    });
});
app.get('/test', function (req, res) {
    res.send("the app is alive");
});
