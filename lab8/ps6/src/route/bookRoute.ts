import express from "express"
import {book, books} from "../type/type"
import { isBookValid } from "../module/bookModule"
let bookCounter = 0


const route = express.Router()

// Middleware to parse JSON bodies
route.use(express.json())


route.post("/", (req, res) => {
    let book : book = req.body
    if (isBookValid(book))
    {
        book.id = String(bookCounter++)
        books.push(book)
        res.send(`book with author ${book.author} has been add!`)
    }
    else
        res.status(400).send("data is not valid....\n {\"title\" : \"string\", \"author\" : \" string\"}")
})

route.put("/:id", (req, res) => {
    const id = req.params.id
    const {author, title} = req.body
    let book = books.find((book) => book.id === id)
    if (book == undefined)
        res.status(400).send("book doesn't exist")

    else
    {
        if (author !== undefined) book.author = author     
        if (title !== undefined) book.title = title
        res.send(`data is edited!...  \n`)
    }

})

route.get("/", (req, res) => {
    res.json(books)
})

route.get("/:id", (req, res) => {
    const book = books.find((book) => req.params.id == book.id)
    if (book == undefined)
        res.status(400).send(`Can't find book with id: ${req.params.id}`)
    else
        res.json(book)
})



export default route