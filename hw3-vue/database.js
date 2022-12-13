// database.js
const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "6020424",
    database: "WAD-2022",
    host: "localhost",
    port: "5432"
});

module.exports = pool;