import { Router, Request, Response, response } from "express";
import { join } from 'path';
import { dataValid } from "../middleWare/dataValid";
import {register} from '../module/registerchecking'


const route = Router();

// Define the path for your register page
const page = join(__dirname, "../../public/register.html"); 

// Serve the register page when the route is accessed with a GET request
route.get("/",(req: Request, res: Response) => {
    res.sendFile(page); // Send the register HTML file
});

// Handle POST request for user registration
route.post("/",dataValid(), register);

export default route;
