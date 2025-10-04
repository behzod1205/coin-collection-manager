import { Router } from "express";
import { commentsController } from "../controller/comments.controller.js";
import { checkLogin } from "../middleware/checkLogin.middleware.js";

const CommentsRouter = Router()
const comments = new commentsController()

CommentsRouter.get("/", comments.GetAll)
CommentsRouter.get("/:id", comments.GetOne)

CommentsRouter.use(checkLogin)
CommentsRouter.post("/", comments.create)
CommentsRouter.patch("/:id", comments.update)
CommentsRouter.delete("/:id", comments.delete)

export default CommentsRouter