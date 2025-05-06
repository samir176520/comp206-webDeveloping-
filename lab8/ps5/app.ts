import express from "express"
import path from "path"
import { user } from "./user";

const app = express() 
const port = 8000

let users : user[]
users = [
    new user("samir", "ahmed", 20),
    new user("dark", "entry", 16)
]

app.use(express.static('public')); // search in directory public for files localhost:8000/index.html

app.listen(port, () => {
    console.log(`lisining in port: `, port)
})

app.get("/", (req, res) => {
    const mainFile = __dirname + "/public/index.html"
    res.sendFile(mainFile) // accept absoulotte paths
})

app.get("/users", (req,res) => {
    res.json(users)
    console.log(users)
})