import { Create, getOne } from "../helpers/CRUD.js";
import BaseController from "./base.controller.js";
const table = "collections"


export class collectionController extends BaseController{
    constructor(){
        super("collections", "id")
    }

    create= async (req, res, next)=>{
            try{
                const data = req.body
                const { user_id, title } = data
                if (!user_id || !title) return res.status(400).json({ message: "User ID and Title are required" })
                
                const user = await getOne(user_id, "users")
                if (!user) return res.status(404).json({message: `User with id ${user_id} not found`})
                const result = await Create(data, this.table)
                res.status(201).json({
                    message: "Collection Created Successfully",
                    data: result
                })
            }catch(err){
                next(err)
            }
        }
}