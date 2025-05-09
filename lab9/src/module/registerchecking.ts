import { validationResult } from "express-validator"
import { Response, Request } from "express"
import { addUser } from "./fileModule"
import { user } from "../user"


export async function register(req: Request, res : Response) {
    const errors = validationResult(req)
    if (errors)
        res.status(400).json(errors)
    else
    {
        try{
            const {userName, email, password} = req.body
            // check if user exist 
            const _user = new user(userName, password, email)
            const state = await addUser(_user)
            if (state) // return true if done
                res.status(201).redirect("/login")
            else
                res.send("nonValid Credantals......")
        } catch (message) {
            console.error(message)
        }

    }
} 