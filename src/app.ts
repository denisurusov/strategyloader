import * as middleware from "./loader/middleware";
import {strategyModel} from "./schema/strategySchema";
import * as express from 'express';


//connect to mongo
middleware.connect();

//initialize rest API server
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

//@http://localhost:3000/strategy call
app.get('/strategy', function (req, res) {
    strategyModel.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else res.json(result);
    });
})