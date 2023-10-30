// App.js
const express = require("express")
const cors = require("cors")

const logRoutes = require("./middleware/logger")

const userRouter = require("./routers/users")

const api = express()

api.use(cors())
api.use(express.json())
api.use(logRoutes)

api.get("/", (req, res) => {
	res.json({
		name: "React and relax API",
		description: "RAR to the world! and back",
	})
})

api.use("/users", userRouter)

module.exports = api
