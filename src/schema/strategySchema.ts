import * as mongoose from 'mongoose';

const collectionName = "strategy";

let strategySchema = new mongoose.Schema(
    {
        strategyCode: String,
        comment: String,
        impact: String,
        name: String,
        problem: String,
        shortname: String,
        strategy: String
    }, {collection: collectionName}
);
export let strategyModel = mongoose.model(collectionName, strategySchema);

export function loadStrategies(): Promise<any> {
    return strategyModel.find({}).find().exec();
}
