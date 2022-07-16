const express = require("express")

const morgan = require("morgan")
const cors = require("cors")
const helmet = require("helmet")

const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(helmet())

const port = process.env.PORT || 3000

app.listen(port, listenHandler)

function listenHandler() {
    console.log(`server starting at port ${port}...`)
}