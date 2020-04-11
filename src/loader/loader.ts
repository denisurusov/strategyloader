import * as mongoose from 'mongoose';

mongoose.connection.on( "connected", () => {
    console.log( "Database has connected successfully." );
});

export function load()
{
//TODO read dockerization and secrets
let connectionString="mongodb+srv://appUser:2128506@cluster0-rwoqh.mongodb.net/workPlanner?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
mongoose.connect(connectionString, {useNewUrlParser: true});
}