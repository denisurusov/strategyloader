import * as mongoose from 'mongoose';

const collectionName = "strategy";

let Schema = mongoose.Schema;

let strategySchema = new Schema(
    {
        code: String,
        comment: String,
        impact: String,
        name: String,
        problem: String,
        shortname: String,
        strategy: String
    }, {collection: collectionName}
);
export let strategyModel = mongoose.model(collectionName, strategySchema);