"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const collectionName = "strategy";
let strategySchema = new mongoose.Schema({
    strategyCode: String,
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
