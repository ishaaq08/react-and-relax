const Pseudocode = require("../models/Pseudocode")

async function getAll(req, res) {
	try {
		const pseudocode = await Pseudocode.getAll()
		res.status(200).json(pseudocode)
	} catch (err) {
		console.log(err)
		res.status(404).send("Not found")
	}
}

async function getByDifficulty(req, res) {
	const difficulty = req.params.difficulty
	try {
		const pseudocode = await Pseudocode.getByDifficulty(difficulty)
		res.status(200).json(pseudocode)
	} catch (err) {
		console.log(err)
		res.status(404).send("Not found")
	}
}

module.exports = {
	getAll,
	getByDifficulty,
}
