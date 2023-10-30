const Fill_in_blanks = require("../models/fill_In_Blanks")

async function getAll(req, res) {
	try {
		const fill_in_blank = await Fill_in_blanks.getAll()
		res.status(200).json(fill_in_blank)
	} catch (err) {
		console.log(err)
	}
}

async function getAnswers(req, res) {
	try {
		const fill_in_blank = await fill_in_blanks.getAnswers()
		res.status(200).json(fill_in_blank)
	} catch (err) {
		console.log(err)
	}
}

module.exports = {
	getAll,
	getAnswers,
}
