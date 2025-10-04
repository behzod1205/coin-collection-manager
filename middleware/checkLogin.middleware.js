import { pool } from "../config/db.js";

export const checkLogin = async (req, res, next)=>{
    try{
        const { email, password } = req.body

        if (!email || password) return res.status(400).json({ message: "Email va parol kerak!" })

        const query = `
        SELECT * 
        FROM 
        WHERE email = $1 
        AND
        password = $2;`
        const result = await pool.query(query, [email, password])

        if(result.rows.length === 0) return res.status(400).json({ message: "Email yoki parol xato!"})

        req.user = result.rows[0]

        next()

    }catch(err){
        console.log("Error:", err)
    }
}