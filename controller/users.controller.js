import { pool } from "../config/db.js";
import BaseController from "./base.controller.js";
import { saveUser, clearUser } from "../helpers/sessionFile.js";
import { getOne } from "../helpers/CRUD.js";

export class userController extends BaseController{
    constructor(){
        super("users", "id")
    }
    create = async (req, res, next)=>{
        try{
            const data = req.body
            const { email } = data
            const user = await getOne(email, "users", "email")
            if (user) return res.status(400).json({message: `#${email} allaqachon ro'yxatdan o'tgan`})
            const result = await Create(data, this.table)
            res.status(201).json(result)
        }catch(err){
            next(err)
        }
    }

    loginCheck = async(req, res)=>{
        try{
            const { email, password } = req.body;

            if (!email || !password) return res.status(400).json({ message: "Email va parol kerak!" });

            const query = `
            SELECT * FROM users
            WHERE email = $1 AND password = $2
            `;
            const result = await pool.query(query, [email, password])

            if (result.rows.length === 0) return res.status(400).json({ message: "Email yoki parol xato!" })

            await saveUser({ email, password })

            res.json({ message: "Login muvaffaqiyatli!", user: result.rows[0] })
        }catch(err){
            console.log("Error: ", err)
        }
    }

    logOut = async (req, res)=>{
        await clearUser()
        res.json({ message: "Tizimdan muvaffaqiyatli chiqdingiz" })
    }
}


console.log(userController)
export default userController