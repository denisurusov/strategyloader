import * as mongoose from 'mongoose';
import {strategyModel} from "../schema/strategySchema";

mongoose.connection.on("connected", async () => {
    console.log("Database has connected successfully");

    strategyModel.find().cursor().eachAsync(strategy => {
        console.log(strategy);
    }).then(() => {
        console.log("done")
    });
});

export function load() {
//TODO read dockerization and secrets
    let connectionString = "mongodb+srv://appUser:2128506@cluster0-rwoqh.mongodb.net/workplanner?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
    mongoose.connect(connectionString, {useNewUrlParser: true});
}