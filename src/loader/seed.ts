import * as capabilityFile from '../../resources/data/capability.json';
import * as strategyFile from '../../resources/data/strategy.json';
//
import {capabilityModel} from "../schema/capabilitySchema";
import {strategyModel} from "../schema/strategySchema";
//
import * as middleware from "./middleware";
import * as mongoose from 'mongoose';

//clean collection then seed data from file
function seed(collection: mongoose.Collection, jsonObject: Array<mongoose.Object>): void {
    collection.deleteMany().then(() => {
            for (let entry of jsonObject) {
                new collection(entry).save(function (err, result) {
                    if (err) console.log(err);
                    else console.log(result);
                })
            }
        }
    );
}

//connect
middleware.connect().then(() => {
    console.log("Connected to database");
});
//do some seeding
seed(capabilityModel, capabilityFile);
seed(strategyModel, strategyFile);