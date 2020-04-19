import * as capabilityFile from '../../resources/data/capability.json';
import * as strategyFile from '../../resources/data/strategy.json';
//
import {capabilityModel} from "../schema/capabilitySchema";
import {strategyModel} from "../schema/strategySchema";
//
import * as middleware from "./middleware";


middleware.connect().then(() => {
    console.log("Connected to database");
});

//clean collecthen then load capabilities
capabilityModel.deleteMany().then(() => {
    for (let entry of capabilityFile.values()) {
        new capabilityModel(entry).save(function (err, result) {
            if (err) console.log(err);
            else console.log(result);
        })
    }
});

//clean collecthen then load strategies
strategyModel.deleteMany().then(() => {
        for (let entry of strategyFile.values()) {
            new strategyModel(entry).save(function (err, result) {
                if (err) console.log(err);
                else console.log(result);
            })
        }
    }
);
