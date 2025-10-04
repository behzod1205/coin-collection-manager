import { pool } from "../config/db.js";
import { readUser } from "../helpers/sessionFile.js";

export const checkLogin = async (req, res, next)=>{
    try{
        if (req.path === "/login" && req.method === "POST"){
            const { email, password } = req.body;

            if (!email || !password) return res.status(400).json({ message: "Email va parol kerak!" });
            
            
            const query = `
            SELECT * 
            FROM users
            WHERE email = $1 
            AND
            password = $2;`
            const result = await pool.query(query, [email, password]);

            if (result.rows.length === 0) return res.status(401).json({ message: "Email yoki parol noto'g'ri. Qaytadan login qiling!" })

            req.user = result.rows[0];
            return next();
        }

        const savedUser = await readUser();

        if (!savedUser || Object.keys(savedUser).length === 0) return res.status(401).json({ message: "Avval login qiling!" })

        const query = `
        SELECT * FROM users
        WHERE email = $1 AND password = $2;
        `;
        const result = await pool.query(query, [savedUser.email, savedUser.password])

        if (result.rows.length === 0) return res.status(401).json({ message: "Login ma'lumotlari yaroqsiz!" })

        req.user = result.rows[0]
        next()


    }catch(err){
        console.log("Error:", err) 
    }
}