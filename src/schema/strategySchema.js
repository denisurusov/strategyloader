"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var strategySchema = new Schema({
    id: Number,
    name: String,
    description: String
});
var strategyModel = mongoose.model('Strategy', strategySchema);
