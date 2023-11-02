// setup.js
const fs = require("fs/promises")
require("dotenv").config()

const db = require("./connect")

const setupDatabase = async () => {
	try {
		const sqlFilePath = "./database/setup.sql"
		const sql = await fs.readFile(sqlFilePath, "utf8")
		await db.query(sql).then(db.end(), console.log("Set-up complete."))
	} catch (error) {
		console.error(error)
	}
}
setupDatabase()
module.exports = setupDatabase
