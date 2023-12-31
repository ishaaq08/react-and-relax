const Fill_in_blanks = require("../models/Fill_In_Blanks")

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
		const fill_in_blank = await Fill_in_blanks.getAnswers()
		res.status(200).json(fill_in_blank)
	} catch (err) {
		console.log(err)
	}
}

async function getAllHtml(req, res) {
	try {
		difficulty = req.params.difficulty
		const fill_in_blank = await Fill_in_blanks.getAllHtml(difficulty)
		res.status(200).json(fill_in_blank)
	} catch (err) {
		console.log(err)
	}
}

async function getAllPyhton(req, res) {
	try {
		difficulty = req.params.difficulty
		const fill_in_blank = await Fill_in_blanks.getAllPyhton(difficulty)
		res.status(200).json(fill_in_blank)
	} catch (err) {
		console.log(err)
	}
}

module.exports = {
	getAll,
	getAnswers,
	getAllHtml,
	getAllPyhton,
}
