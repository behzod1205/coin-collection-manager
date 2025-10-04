import { Router } from "express";
import { checkLogin } from "../middleware/checkLogin.middleware";
import userController from "../controller/users.controller";

const UserRouter = Router()

UserRouter.post("/register", userController.create)
UserRouter.post("/login", checkLogin, userController.loginCheck)

UserRouter.use(checkLogin)

UserRouter.get("/", userController.GetAll)
UserRouter.get("/:id", userController.GetOne)
UserRouter.put("/:id", userController.update)
UserRouter.delete("/:id", userController.delete)

export default UserRouter