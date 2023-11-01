const { Router } = require("express")

const userController = require("../controllers/user.js")

const userRouter = Router()

userRouter.post("/register", userController.register)
userRouter.post("/login", userController.login)
userRouter.get("/:user", userController.getUser)
userRouter.delete("/:user", userController.deleteUser)
userRouter.patch("/:user", userController.updateUser)

module.exports = userRouter
