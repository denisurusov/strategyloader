import * as mongoose from 'mongoose';

const collectionName = "strategy";

let strategySchema = new mongoose.Schema(
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