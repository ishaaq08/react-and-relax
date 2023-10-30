const db = require("../database/connect")

class User {
	constructor({ id, username, password, email }) {
		this.id = id
		this.username = username
		this.password = password
		this.email = email
	}

	static async getOneById(id) {
		const response = await db.query("SELECT * FROM users WHERE id = $1", [id])
		if (response.rows.length != 1) {
			throw new Error("Unable to locate user.")
		}
		return new User(response.rows[0])
	}

	static async getOneByUsername(username) {
		const response = await db.query("SELECT * FROM users WHERE username = $1", [
			username,
		])
		if (response.rows.length != 1) {
			throw new Error("Unable to locate user.")
		}
		return new User(response.rows[0])
	}

	static async getOneByEmail(email) {
		const response = await db.query("SELECT * FROM users WHERE email = $1", [
			email,
		])
		if (response.rows.length != 1) {
			throw new Error("Unable to locate user.")
		}
		return new User(response.rows[0])
	}

	static async create(data) {
		const { username, password, email } = data
		let response = await db.query(
			"INSERT INTO users(username, password, email) VALUES ($1, $2, $3) RETURNING id;",
			[username, password, email]
		)
		const newId = response.rows[0].id
		const newUser = await User.getOneById(newId)
		return newUser
	}
}

module.exports = User
