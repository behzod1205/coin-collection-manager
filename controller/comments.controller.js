import { getOne, Create } from "../helpers/CRUD.js";
import BaseController from "./base.controller.js";


export class commentsController extends BaseController{
    constructor(){
        super("comments", "id")
    }

    create = async (req, res, next)=>{
            try{
                const data = req.body
                const { collection_id, user_id, text} = data
                if (!collection_id || !user_id || !text) return res.status(400).json({message: "Collection id, User id and Text are required!"})
                const collection = await getOne(collection_id, "collections")
                const user = await getOne(user_id, "users")

                if(!collection || !user ) return res.status(404).json({message: "User or Collection not found!"})
                
                const result = await Create(data, this.table)
                res.status(201).json(result)
            }catch(err){
                next(err)
            }
        }
}