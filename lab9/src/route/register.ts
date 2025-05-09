import { Router, Request, Response } from "express";
import { join } from 'path';
import { user } from '../module/user';
import { addUser } from '../module/fileModule';
import { validationResult } from 'express-validator';
import { dataValid } from "../middleWare/dataValid";

const route = Router();

// Define the path for your register page
const page = join(__dirname, "../../public/register.html"); 

// Serve the register page when the route is accessed with a GET request
route.get("/",(req: Request, res: Response) => {
    res.sendFile(page); // Send the register HTML file
});

// Handle POST request for user registration
route.post("/",dataValid(), async (req: Request, res: Response) : Promise<void> => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }

    // Extract data from request body
    const { email, password, userName } = req.body;
    
    // Create a new user object
    const _user = new user(userName, password, email);
    console.log(_user);

    try {
        // Try to add the user
        const state = await addUser(_user);
        
        // Check if the user was successfully added
        if (!state) {
            res.send("Wrong credentials, try again...");
        } else {
            res.redirect('/login'); // Redirect to login if successful
        }
    } catch (err) {
        console.error(err); // Log any errors to the console
        res.status(500).send("Internal Server Error"); // Handle unexpected errors
    }
});

export default route;
