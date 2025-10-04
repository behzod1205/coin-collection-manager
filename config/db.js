import { Pool } from "pg"

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "coin_collection_manager",
    password: "bek_1205",
    port: 5432,     
})

export { pool }