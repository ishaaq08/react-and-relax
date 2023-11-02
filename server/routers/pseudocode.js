const { Router } = require("express")

const pseudocode_Controller = require("../controllers/pseudocode.js")

const pseudocode_Router = Router()

pseudocode_Router.get("/", pseudocode_Controller.getAll)
pseudocode_Router.get("/:difficulty", pseudocode_Controller.getByDifficulty)

module.exports = pseudocode_Router
