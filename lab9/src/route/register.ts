import { Router } from "express";
import { join } from 'path'
import {user} from '../module/user'
import {addUser} from '../module/fileModule'

const route = Router()

const page = join(__dirname , "../../public/register.html") // , is apply .. to back to father folder

route.route("/").get( (req, res) => {
    res.sendFile(page)
})

.post( (req, res) => {
    const {email, password, userName} = req.body
        const _user = new user(userName, password, email)
        console.log(_user)
        addUser(_user)
        .then(state => {
            if(!state)
                res.send("wrong credintal try agin....")
            else
                res.redirect('/login')
        })

})

export default route