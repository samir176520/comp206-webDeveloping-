// this is addition from me it's not required in sheet

import express from "express"

import {logs} from "../type/log"

const route = express.Router()

route.get("/", (req, res) => {
    res.json(logs)
})

export default route