import { Router } from "express";
import UserRouter from "./users.routes.js";
import collectionRouter from "./collection.routes.js";
import CommentsRouter from "./comments.routes.js";

const MainRouter = Router()

MainRouter.use("/users", UserRouter)
MainRouter.use("/collections", collectionRouter)
MainRouter.use("/comments", CommentsRouter)

export default MainRouter