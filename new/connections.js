const { Client } = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Uh2792",
    database: "wingspan"
})

module.exports = client