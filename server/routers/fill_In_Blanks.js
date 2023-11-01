const { Router } = require("express")

const fill_In_Blanks_Controller = require("../controllers/fill_In_Blanks.js")

const fill_In_Blanks_Router = Router()

fill_In_Blanks_Router.get("/", fill_In_Blanks_Controller.getAll)


module.exports = fill_In_Blanks_Router
