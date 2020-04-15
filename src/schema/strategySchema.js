"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var collectionName = "strategy";
var strategySchema = new mongoose.Schema({
    code: String,
    comment: String,
    impact: String,
    name: String,
    problem: String,
    shortname: String,
    strategy: String
}, { collection: collectionName });
exports.strategyModel = mongoose.model(collectionName, strategySchema);
function loadStrategies() {
    return exports.strategyModel.find({}).find().exec();
}
exports.loadStrategies = loadStrategies;
