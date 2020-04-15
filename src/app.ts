import * as middleware from "./loader/middleware";
import {loadStrategies} from "./schema/strategySchema";
//
import * as express from 'express';

//connect to mongo
middleware.connect();

//initialize rest API server
const app = express();
const port = 3000;
app.listen(port, () => console.log("API server started"));


//@http://localhost:3000/strategy call
app.get('/strategy', function (req, res) {
    loadStrategies().then(result => {
        res.json(result)
    }).catch(err => {
        res.req.send(err)
    });
})