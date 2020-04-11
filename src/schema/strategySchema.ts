import * as mongoose from 'mongoose';
let Schema = mongoose.Schema;

let strategySchema = new Schema(
    {
        id:Number,
        name:String,
        description:String
    }
);
let strategyModel = mongoose.model('Strategy', strategySchema);