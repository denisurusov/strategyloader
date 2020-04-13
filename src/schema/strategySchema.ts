import * as mongoose from 'mongoose';

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
    }
);
export let strategyModel = mongoose.model('strategy', strategySchema);