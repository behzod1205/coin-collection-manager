import { Pool } from "pg"

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Coin_Collection_Manager",
    password: "bek_1205",
    port: 5432,     
})

export { pool }