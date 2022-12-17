const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "wad3008",
    database: "wad-2022",
    host: "localhost",
    port: "5432"
});

const execute = async(query) => {
    try {
        await pool.connect(); // create a connection
        await pool.query(query); // executes a query
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

// gen_random_uuid() - a system function to generate a random Universally Unique IDentifier (UUID)

const createTblQuery_users = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;

execute(createTblQuery_users).then(result => {
    if (result) {
        console.log('Table "users" is created!');
    }
});

const createTblQuery_posts = `
    CREATE TABLE IF NOT EXISTS "posts" (
        id SERIAL PRIMARY KEY,
        datetime VARCHAR(10) NOT NULL,
        post_title VARCHAR(200),
        post_content VARCHAR(500) NOT NULL
    );`;

execute(createTblQuery_posts).then(result => {
    if (result) {
        console.log('Table "posts" is created!');
    }
});

module.exports = pool;