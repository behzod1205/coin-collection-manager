import { Router } from "express";
import UserRouter from "./users.routes.js";
import collectionRouter from "./collection.routes.js";
import CommentsRouter from "./comments.routes.js";
import coin_collectionRouter from "./coin_collection.routes.js"
import coinsRouter from "./coins.routes.js"
import collectionsRouter from "./collection.routes.js"



const MainRouter = Router()

MainRouter.use("/users", UserRouter)
MainRouter.use("/collections", collectionRouter)
MainRouter.use("/comments", CommentsRouter)
MainRouter.use("/coins", coinsRouter)
MainRouter.use("/coin_collection", coin_collectionRouter)
MainRouter.use("/collections", collectionsRouter)

export default MainRouter