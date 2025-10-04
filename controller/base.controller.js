import { Create, Update, Delete, getOne, getAll} from "../helpers/CRUD.js"


export default class BaseController{
    constructor(table, idColumn = "id"){
        this.table = table,
        this.idColumn = idColumn
    }

    create = async (req, res, next)=>{
            try{
                const data = req.body
                const result = await Create(data, this.table)
                res.status(201).json(result)
            }catch(err){
                next(err)
            }
        }

    update = async (req, res, next)=>{
            try{
                const { id } = req.params
                const data = req.body
    
                const result = await Update(id, data, this.table, this.idColumn)
                if (!result) return res.status(404).json({ message: `${this.table}not found`})
    
                res.status(200).json(result)
            }catch(err){
                next(err)
            }
        }

    delete = async(req, res, next)=>{
            try{
                const { id } = req.params
    
                const result = await Delete(id, this.table, this.idColumn)
                if (!result) return res.status(404).json({ message: `${this.table} Not Found`})
                
                res.status(200).json({message: "Player Deleted Successfully", Player: result})
            }catch(err){
                next(err)
            }
        }

    GetOne = async (req, res, next)=>{
            try{
                const { id } = req.params
    
                const result = await getOne(id, this.table)
                if (!result) return res.status(404).json({ message: `${this.table} Not Found`})
                
                res.status(200).json(result)
            }catch(err){
                next(err)
            }
        }
    GetAll = async(req, res, next)=>{
            try{
                const result = await getAll(this.table)
                if (!result) return res.status(404).json({ message: `${this.table} Not Found`})
                
                res.status(200).json(result)
            }catch(err){
                next(err)
            }
        }
}