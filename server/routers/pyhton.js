const { Router } = require("express")

const Pyhton_Controller = require("../controllers/fill_In_Blanks.js")

const Pyhton_Router = Router()

Pyhton_Router.get("/:difficulty", Pyhton_Controller.getAllPyhton)

module.exports = Pyhton_Router
