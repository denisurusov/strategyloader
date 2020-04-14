"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var strategySchema_1 = require("../schema/strategySchema");
function returnStrategies() {
    strategySchema_1.strategyModel.find().cursor().eachAsync(function (strategy) {
        console.log(strategy);
    }).then(function () {
        console.log("done");
    });
}
exports.returnStrategies = returnStrategies;
