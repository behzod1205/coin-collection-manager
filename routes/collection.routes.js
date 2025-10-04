import { Router } from "express";
import { collectionController } from "../controller/collections.controller.js";
import { checkLogin } from "../middleware/checkLogin.middleware.js";

const collectionRouter = Router()
const collections = new collectionController()

collectionRouter.get("/", collections.GetAll)
collectionRouter.get("/:id", collections.GetOne)
collectionRouter.post("/", checkLogin, collections.create)
collectionRouter.patch("/:id", checkLogin, collections.update)
collectionRouter.delete("/:id", checkLogin, collections.delete)

export default collectionRouter