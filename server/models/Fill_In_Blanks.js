const db = require("../database/connect")

class Fill_In_Blanks {
	constructor({ id, question }) {
		this.id = id
		this.question = question
		this.answers = []
	}

	static async getAll() {
		try {
			const { rows } = await db.query("SELECT * FROM fill_in_blanks")
			const results = []
			for (let row of rows) {
				const instance = new Fill_In_Blanks(row)
				await instance.getAnswers()
				results.push(instance)
			}
			return results
		} catch (err) {
			console.log(err)
		}
	}

	async getAnswers() {
		try {
			const { rows } = await db.query(
				"SELECT question_id, answer, is_correct FROM fib_Answers WHERE question_id = $1",
				[this.id]
			)

			return rows.map((row) => this.answers.push(row))
		} catch (err) {
			console.log(err)
		}
	}

	static async getAllHtml(difficulty) {
		try {
			const { rows } = await db.query(
				"SELECT * FROM fill_in_blanks where lower(difficulty) = lower($1) ORDER BY RANDOM()",
				[difficulty]
			)
			console.log(rows)
			const results = []
			for (let row of rows) {
				const instance = new Fill_In_Blanks(row)
				await instance.getAnswers()
				results.push(instance)
			}
			return results
		} catch (error) {
			console.log(error)
		}
	}

	static async getAllPyhton(difficulty) {
		try {
			const { rows } = await db.query(
				"SELECT * FROM fill_in_blanks where language = 'python' and lower(difficulty) = lower($1) ORDER BY RANDOM()",
				[difficulty]
			)
			console.log(rows)
			const results = []
			for (let row of rows) {
				const instance = new Fill_In_Blanks(row)
				await instance.getAnswers()
				results.push(instance)
			}
			return results
		} catch (error) {
			console.log(error)
		}
	}
}

module.exports = Fill_In_Blanks
