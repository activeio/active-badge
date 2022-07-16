const { express, cors, helmet, morgan, router } = require("./src/imports")

const app = express()
app.use(express.json())

app.use(morgan("dev"))
app.use(cors())
app.use(helmet())
app.use("/api", router)

app.get("/", (req, res, next) => {
    res.send("hi");
})

const port = process.env.PORT || 3000
app.listen(port, listenHandler)

function listenHandler() {
    console.log(`server starting at port ${port}...`)
}