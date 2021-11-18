const Pool = require('pg').Pool
require('dotenv').config()

// const pool = new Pool({
//     user: `postgres`,
//     host: process.env.DB_HOST,
//     database: `tiramisyu`,
//     password: process.env.DB_PASSWORD,
//     port: 5432
// })

const isProduction = process.env.NODE_ENV === "production"

const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : process.env.DB_URI,
    ssl: { rejectUnauthorized: false, },            //comment this for development
})

module.exports = pool;