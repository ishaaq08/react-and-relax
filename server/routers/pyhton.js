const { Router } = require("express")

const Python_Controller = require("../controllers/fill_In_Blanks.js")

const Python_Router = Router()

Python_Router.get("/:difficulty", Python_Controller.getAllPython)

module.exports = Python_Router
