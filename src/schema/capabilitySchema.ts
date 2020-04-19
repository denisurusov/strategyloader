import * as mongoose from 'mongoose';

const collectionName = "capability";

let capabilitySchema = new mongoose.Schema(
    {
        strategyCode: String,
        capabilities: [
            {
                name: String,
                capability: String,
                tracks: [{name: String}]
            }
        ]
    },
    {
        collection: collectionName
    }
    )
;
export let capabilityModel = mongoose.model(collectionName, capabilitySchema);

export function loadCapabilities(): Promise<any> {
    return capabilityModel.find({}).find().exec();
}
