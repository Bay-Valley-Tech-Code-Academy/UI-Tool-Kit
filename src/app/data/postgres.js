import { Pool } from 'pg'

const pool = new Pool({
    host: "localhost",
    port: "5432",
    user: "postgres",
    password: "4621",
    database: "productlist"
})

export default pool