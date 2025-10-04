import { Router } from "express";
import { checkLogin } from "../middleware/checkLogin.middleware.js";
import userController from "../controller/users.controller.js";

const UserRouter = Router()

UserRouter.post("/register", userController.create)
UserRouter.post("/login", checkLogin, userController.loginCheck)

UserRouter.use(checkLogin)

UserRouter.get("/", userController.GetAll)
UserRouter.get("/:id", userController.GetOne)
UserRouter.patch("/:id", userController.update)
UserRouter.delete("/:id", userController.delete)
UserRouter.post("/logout", userController.logOut)

export default UserRouter