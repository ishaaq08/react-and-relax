const { Router } = require("express")

const html_Controller = require("../controllers/fill_In_Blanks.js")

const html_Router = Router()

html_Router.get("/:difficulty", html_Controller.getAllHtml)

module.exports = html_Router
