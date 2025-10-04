import { Router } from "express";
import { checkLogin } from "../middleware/checkLogin.middleware.js";
import userController from "../controller/users.controller.js";

const UserRouter = Router()
const users = new userController()

UserRouter.post("/register", users.create)
UserRouter.post("/login", checkLogin, users.loginCheck)

UserRouter.use(checkLogin)

UserRouter.get("/", users.GetAll)
UserRouter.get("/:id", users.GetOne)
UserRouter.patch("/:id", users.update)
UserRouter.delete("/:id", users.delete)
UserRouter.post("/logout", users.logOut)

export default UserRouter