import  express  from "express";
import {logs, log} from '../type/log'

const route = express.Router()


route.use((req, res, next) => {
    console.log(`${req.method} ${req.url}\n`);
    logs.push({method: req.method, url : req.url})
    next(); // علشان يكمل باقي النصايب
});


export default route