// App.js
const express = require("express")
const cors = require("cors")

const logRoutes = require("./middleware/logger")

const userRouter = require("./routers/users")
const fill_In_Blanks_Router = require("./routers/fill_In_Blanks")

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

api.use("/fill_in_blanks", fill_In_Blanks_Router)
api.use("/users", userRouter)

module.exports = api
