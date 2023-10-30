// App.js
const express = require("express")
const cors = require("cors")

const logRoutes = require("./middleware/logger")

const userRouter = require("./routers/users")

const app = express()

app.use(cors())
app.use(express.json())
app.use(logRoutes)

app.get("/", (req, res) => {
	res.json({
		name: "React and relax API",
		description: "RAR to the world! and back",
	})
})

app.use("/users", userRouter)

module.exports = app
