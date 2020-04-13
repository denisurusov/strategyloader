"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var strategySchema = new Schema({
    code: String,
    comment: String,
    impact: String,
    name: String,
    problem: String,
    shortname: String,
    strategy: String
});
exports.strategyModel = mongoose.model('strategy', strategySchema);
