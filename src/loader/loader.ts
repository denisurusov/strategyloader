import {strategyModel} from "../schema/strategySchema";

export function returnStrategies() {
    strategyModel.find().cursor().eachAsync(strategy => {
        console.log(strategy);
    }).then(() => {
        console.log("done")
    });
}

