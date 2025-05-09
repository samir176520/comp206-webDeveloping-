import { Router } from "express";
import { join } from 'path'
import {user} from '../module/user'
import { userExist } from "../module/fileModule";


const route = Router()

const page = join(__dirname , "../../public/login.html") // , is apply .. to back to father folder

route.route("/").get( (req, res) => {
    res.sendFile(page)
})

.post(async (req, res) => {
    const {userName, password} = req.body
    const temp = new user(userName, password, "")
    const _user = await userExist(temp)
    if (_user)
    {
        req.session.email = _user.email // assign session
        req.session.userName = _user.userName
        res.redirect("/profile") 
 
    }
    else
        res.status(401).send("wrong credantil try agian....")
})

export default route