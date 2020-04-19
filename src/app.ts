import * as middleware from "./loader/middleware";
import {loadStrategies} from "./schema/strategySchema";
//
import * as express from 'express';
import {loadCapabilities} from "./schema/capabilitySchema";

//connect to mongo
middleware.connect().then(() => {
    console.log("yay");
});

//initialize rest API server
const app = express();
const port = 3000;
app.listen(port, () => console.log("API server started"));


//@http://localhost:3000/strategy call
app.get('/strategy', (req: express.Request, res: express.Response) => {
    loadStrategies().then(result => {
        res.json(result)
    }).catch(err => {
        res.req.send(err)
    });
});

//@http://localhost:3000/capability call
app.get('/capability', (req: express.Request, res: express.Response) => {
    loadCapabilities().then(result => {
        res.json(result)
    }).catch(err => {
        res.req.send(err)
    });
});

app.get('/test', function (req: express.Request, res: express.Response) {
    res.send("the app is alive");
});
