import  express from "express"
import { Request, Response } from "express"
import fs from "fs/promises"

const app = express()

const port = 17652

app.get("/", (res : Response, req : Request) => {
    res.send("Welcom to the greatest login has ever made")
    console.log("enter root")
})

app.listen(port, () =>{
    console.log(`Listening at localhost in ${port}`)
})
