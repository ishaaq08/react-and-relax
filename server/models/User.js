const db = require("../database/connect")

class User {
	constructor({ id, username, password, email, points, date_registered }) {
		this.id = id
		this.username = username
		this.password = password
		this.email = email
		this.points = points
		this.date_registered = date_registered
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
	async delete() {
		await db.query("DELETE FROM users WHERE id = $1", [this.id])

		return true
	}
	async update(data) {
		try {
			if (
				data.hasOwnProperty("username") &&
				data.hasOwnProperty("password") &&
				data.hasOwnProperty("email")
			) {
				const { username, password, email } = data
				let response = await db.query(
					"UPDATE users SET username = $1, password = $2, email = $3 WHERE id = $4 RETURNING id;",
					[username, password, email, this.id]
				)
				const newId = response.rows[0].id
				const newUser = await User.getOneById(newId)
				return newUser
			} else if (
				data.hasOwnProperty("username") &&
				data.hasOwnProperty("password")
			) {
				const { username, password } = data
				let response = await db.query(
					"UPDATE users SET username = $1, password = $2 WHERE id = $3 RETURNING id;",
					[username, password, this.id]
				)
				const newId = response.rows[0].id
				const newUser = await User.getOneById(newId)
				return newUser
			} else if (
				data.hasOwnProperty("username") &&
				data.hasOwnProperty("email")
			) {
				const { username, email } = data
				let response = await db.query(
					"UPDATE users SET username = $1, email = $2 WHERE id = $3 RETURNING id;",
					[username, email, this.id]
				)
				const newId = response.rows[0].id
				const newUser = await User.getOneById(newId)
				return newUser
			} else if (
				data.hasOwnProperty("password") &&
				data.hasOwnProperty("email")
			) {
				const { password, email } = data
				let response = await db.query(
					"UPDATE users SET password = $1, email = $2 WHERE id = $3 RETURNING id;",
					[password, email, this.id]
				)
				const newId = response.rows[0].id
				const newUser = await User.getOneById(newId)
				return newUser
			} else if (data.hasOwnProperty("username")) {
				const { username } = data
				let response = await db.query(
					"UPDATE users SET username = $1 WHERE id = $2 RETURNING id;",
					[username, this.id]
				)
				const newId = response.rows[0].id
				const newUser = await User.getOneById(newId)
				return newUser
			} else if (data.hasOwnProperty("password")) {
				const { password } = data
				let response = await db.query(
					"UPDATE users SET password = $1 WHERE id = $2 RETURNING id;",
					[password, this.id]
				)
				const newId = response.rows[0].id
				const newUser = await User.getOneById(newId)
				return newUser
			} else if (data.hasOwnProperty("email")) {
				const { email } = data
				let response = await db.query(
					"UPDATE users SET email = $1 WHERE id = $2 RETURNING id;",
					[email, this.id]
				)
				const newId = response.rows[0].id
				const newUser = await User.getOneById(newId)
				return newUser
			} else if (data.hasOwnProperty("points")) {
				const { points } = data
				let response = await db.query(
					"UPDATE users SET points = $1 WHERE id = $2 RETURNING id;",
					[points, this.id]
				)
				const newId = response.rows[0].id
				const newUser = await User.getOneById(newId)
				return newUser
			}
		} catch (error) {
			console.error("Error updating user:", error)

			return { error: "Failed to update user" }
		}
	}
}

module.exports = User
