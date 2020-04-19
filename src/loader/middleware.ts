import * as mongoose from 'mongoose';

mongoose.connection.on("connected", async () => {
    console.log("Database has connected successfully");
})

//TODO read dockerization and secrets...returning void might not be the best idea ever
export async function connect(): Promise<any> {

    let connectionString = "mongodb+srv://appUser:2128506@cluster0-rwoqh.mongodb.net/workplanner?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
    //this removes a deprecation warning
    mongoose.set('useUnifiedTopology', true);
    //this connects
    await mongoose.connect(connectionString, {useNewUrlParser: true});
}