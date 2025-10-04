import { Router } from "express";
import UserRouter from "./users.routes.js";

const MainRouter = Router()

MainRouter.use("/users", UserRouter)

export default MainRouter