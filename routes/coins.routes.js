import { Router } from "express";

import {findAll, findOne, createOne, updateOne, deleteOne} from "../controller/coins.controller.js"


const coinsRouter = Router()



coinsRouter.get("/", findAll)
coinsRouter.get("/:id", findOne)
coinsRouter.post("/", createOne)
coinsRouter.put("/:id", updateOne)
coinsRouter.delete("/:id", deleteOne)


export default coinsRouter