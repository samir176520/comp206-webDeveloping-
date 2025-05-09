import express from 'express'
import session from 'express-session'
import registerRoute from './route/register'
import loginRoute from './route/loginRoute'
import  profileRoute  from './route/profileRoute'
import {join} from 'path' 



const app = express() // define application 


// middlewares
app.use(express.static('./public')) // add all files in public folder
app.use(express.json()) // parse request body for future using
app.use(express.urlencoded({extended : true}))

const port = 3000


app.use(session(
    {
        secret:"ziad",
        saveUninitialized:false,
        resave:false,
        cookie : {
            maxAge : 900000
        }
    }
))
declare module "express-session"{
    interface SessionData{
        email:string,
        userName:string
    }

}

app.use("/register", registerRoute)

app.use("/login", loginRoute)

app.use("/profile", profileRoute)



app.listen(port, () => {
    console.log(`lisining at port ${port}`)
})

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '/public/index.html'))
})

app.get('/user', (req, res) => {
    if(req.session.userName)
        res.json({userName: req.session.userName})
})

