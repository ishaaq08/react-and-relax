// index.js
require("dotenv").config()

const api = require("./app.js")

api.listen(process.env.PORT, () => {
	console.log(`API listening on port ${process.env.PORT}...`)
})
