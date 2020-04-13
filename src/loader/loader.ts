import * as mongoose from 'mongoose';
import {strategyModel} from "../schema/strategySchema";

mongoose.connection.on("connected", async () => {
    console.log("Database has connected successfully");

    const cursor = strategyModel.find().cursor();
    for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
        console.log(doc);
    }
});

export function load() {
//TODO read dockerization and secrets
    let connectionString = "mongodb+srv://appUser:2128506@cluster0-rwoqh.mongodb.net/workplanner?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
    mongoose.connect(connectionString, {useNewUrlParser: true});
}