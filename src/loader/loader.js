"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
mongoose.connection.on("connected", function () {
    console.log("Database has connected successfully.");
});
function load() {
    //TODO read dockerization and secrets
    var connectionString = "mongodb+srv://appUser:2128506@cluster0-rwoqh.mongodb.net/workPlanner?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
    mongoose.connect(connectionString, { useNewUrlParser: true });
}
exports.load = load;
