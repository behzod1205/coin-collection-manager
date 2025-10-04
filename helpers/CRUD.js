import { pool } from "../config/db.js";

async function Create(data, table) {
    try{
        const keys = Object.keys(data)
        const values = Object.values(data)

        const placeholders = keys.map((key, index)=> `$${index +1}`).join(", ")
        const query = `
        INSERT INTO ${table}(${keys.join(", ")}) 
        VALUES(${placeholders})
        RETURNING *;`

        const res = await pool.query(query, values)
        console.log(`Inserted row in ${table}`, res.rows[0])
        return res.rows[0]
    }catch(err){
        console.error("Error: ", err)
        throw err
    }
}




async function Update(id, data, table, idColumn = "id") {
    try{
        const keys = Object.keys(data)
        if (keys.length === 0) return null
        
        let values = Object.values(data)
        values.push(id)
        const temp = keys
        .map((key, index)=> `${key} = $${index + 1}`)
        .join(", ")

        const query = `
        UPDATE ${table}
        SET  ${temp} 
        WHERE ${idColumn} = $${values.length} 
        RETURNING *;`

        const res = await pool.query(query, values)
        console.log(`Updated row in ${table}`, res.rows[0])
        return res.rows[0] || null
    }catch(err){
        console.error("Error: ", err)
        throw err
    }
}

async function Delete(id, table, idColumn = "id") {
    const query = `
    DELETE FROM 
    ${table} 
    WHERE 
    ${idColumn} = $1 
    RETURNING *;`

        try{
            const res = await pool.query(query, [id])
            if (res.rows.length === 0) {
                console.log(`Data on ${table} not found`)
                return null
            }
            console.log("Data: ", res.rows[0])
            return res.rows[0]
        }catch(err){
            console.log(err)
        }
}

async function getOne(id, table){
    try{
        const query = `
        SELECT *
        FROM ${table} 
        WHERE id = $1;`

        const res = await pool.query(query, [id])
        return res.rows[0]
    }catch(err){
        console.error("Error: ", err)
    }
}

async function getAll(table) {
    try{
        const query = `
        SELECT *
        FROM ${table};`

        const res = await pool.query(query)
        return res.rows
    }catch(err){
        console.error("Error: ", err)
    }
}

export { Create, Update, Delete, getOne, getAll}