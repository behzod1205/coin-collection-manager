import { Router } from "express";

import {findAll, findOne, createOne, updateOne, deleteOne} from "../controller/collections.controller.js"


const collectionsRouter = Router()



collectionsRouter.get("/", findAll)
collectionsRouter.get("/:id", findOne)
collectionsRouter.post("/", createOne)
collectionsRouter.put("/:id", updateOne)
collectionsRouter.delete("/:id", deleteOne)


export default collectionsRouter