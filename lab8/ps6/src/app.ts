import express from 'express'
import logger from './middlewares/logger'
import bookRoute from './route/bookRoute'
import logs from './route/loggerRoute'
const app = express()

const port = 3000


app.listen(port, () => {
    console.log(`listening at port: ${port}`)
})

app.use(logger) // call logger when method send


app.get("/", (req, res) => {
    res.send("welcom to the book Manegment API")
})



app.use("/books", bookRoute)
app.use("/logs", logs)
