const express = require("express")
const app = express()
require("dotenv").config()
const { Client } = require("@lix-url/sdk")
const client = new Client('')
const userRouter = require("./routes/user.route")
app.use(express.json())


app.use("/", userRouter)

const PORT_KEY = process.env.PORT_NUMBER
app.listen(PORT_KEY, (err) => {
    if (err) {
        console.log("App failed to run!");
        console.log(err);
    } else {
        console.log("App running on " + PORT_KEY)
    }
})
