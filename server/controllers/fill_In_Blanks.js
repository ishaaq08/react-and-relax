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
		res.status(500).json({ error: err })
	}
}

async function getAllHtml(req, res) {
	try {
		difficulty = req.params.difficulty
		const fill_in_blank = await Fill_in_blanks.getAllHtml(difficulty)
		res.status(200).json(fill_in_blank)
	} catch (err) {
		console.log(err)
		res.status(500).json({ error: err })
	}
}

async function getAllPython(req, res) {
	try {
		difficulty = req.params.difficulty
		const fill_in_blank = await Fill_in_blanks.getAllPython(difficulty)
		res.status(200).json(fill_in_blank)
	} catch (err) {
		console.log(err)
		res.status(500).json({ error: err })
	}
}

module.exports = {
	getAll,
	getAnswers,
	getAllHtml,
	getAllPython,
}
