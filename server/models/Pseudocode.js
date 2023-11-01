const db = require("../database/connect")

class Pseudocode {
	constructor({ id, question, difficulty, answer, code }) {
		this.id = id
		this.question = question
		this.code = code
		this.difficulty = difficulty
		this.answer = answer
	}

	static async getAll() {
		try {
			const { rows } = await db.query("SELECT * FROM pseudocode ")
			const results = []
			for (let row of rows) {
				const instance = new Pseudocode(row)

				results.push(instance)
			}
			return results
		} catch (err) {
			console.log(err)
			return err
		}
	}

	static async getByDifficulty(difficulty) {
		try {
			const { rows } = await db.query(
				"SELECT * FROM pseudocode WHERE lower(difficulty) = lower($1)",
				[difficulty]
			)

			const results = []
			for (let row of rows) {
				const instance = new Pseudocode(row)
				results.push(instance)
			}
			return results
		} catch (err) {
			console.log(err)
			return err
		}
	}
}

module.exports = Pseudocode
