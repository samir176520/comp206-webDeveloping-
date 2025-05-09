import { Router } from "express";
import { join } from 'path'
import {user} from '../user'
import  session  from "express-session";


const route = Router()

const page = join(__dirname , "../../public/profile.html") // , is apply .. to back to father folder

route.route('/').get((req, res) => {
    res.sendFile(page)
})

.delete((req, res) => {
    req.session.destroy((mes) =>{
        if(mes)
            return res.send(mes).status(400)
        res.clearCookie('connect.sid').status(200).send("logout successfully.. ")
    })
})

route.get("/user",(req, res) => {
            console.log(req.session)
    if(req.session.userName && req.session.email)
    {

        res.status(200).json({userName: req.session.userName, email: req.session.email})
    }
    else
        res.status(400).json({ error: "Unauthorized or session expired" });

})

export default route