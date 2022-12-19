const express = require('express');
const pool = require('./database');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const path = require('path')

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'src/assets')));

app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
// we need to include "credentials: true" to allow cookies to be represented  
// also "credentials: 'include'" need to be added in Fetch API in the Vue.js App

app.use(express.json()); // parses incoming requests with JSON payloads and is based on body-parser
app.use(cookieParser()); // parse cookie header and populate req.cookies with an object keyed by the cookie names

const secret = "gdgdhdbcb770785rgdzqws"; // use a stronger secret
const maxAge = 60 * 60; // unlike cookies, the expiresIn in jwt token is calculated by seconds not milliseconds

const generateJWT = (id) => {
    return jwt.sign({ id }, secret, { expiresIn: maxAge })
    // jwt.sign(payload, secret, [options, callback]), and it returns the JWT as string
}

app.listen(port, () => {
    console.log("Server is listening to port " + port + ".")
});

// is used to check whether a user is authinticated
app.get('/auth/authenticate', async(req, res) => {
    verifyAuth(req, res);
});

// signup a user
app.post('/auth/signup', async(req, res) => {
    try {
        console.log("A signup request has arrived!");
        //console.log(req.body);
        const { email, password } = req.body;

        const salt = await bcrypt.genSalt(); // generates the salt, i.e., a random string
        const bcryptPassword = await bcrypt.hash(password, salt) // hash the password and the salt 
        const authUser = await pool.query( // insert the user and the hashed password into the database
            "INSERT INTO users(email, password) values ($1, $2) RETURNING*", [email, bcryptPassword]
        );
        console.log(authUser.rows[0].id);
        const token = await generateJWT(authUser.rows[0].id); // generates a JWT by taking the user id as an input (payload)
        //console.log(token);
        //res.cookie("isAuthorized", true, { maxAge: 1000 * 60, httpOnly: true });
        //res.cookie('jwt', token, { maxAge: 6000000, httpOnly: true });
        res.status(201)
           .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
           .json({ user_id: authUser.rows[0].id })
           .send;
    } catch (err) {
        console.error(err.message);
        res.status(400)
           .send(err.message);
    }
});

app.post('/auth/login', async(req, res) => {
    try {
        console.log("A login request has arrived!");
        const { email, password } = req.body;
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rows.length === 0) return res.status(401).json({ error: "User is not registered!" });
        /* To authenticate users, you will need to compare the password they provide with the one in the database. 
        bcrypt.compare() accepts the plain text password and the hash that you stored, along with a callback function. 
        That callback supplies an object containing any errors that occurred, and the overall result from the comparison. 
        If the password matches the hash, the result is true.
        bcrypt.compare method takes the first argument as a plain text and the second argument as a hash password. 
        If both are equal then it returns true else returns false. */

        // checking if the password is correct
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        console.log("ValidPassword:" + validPassword- + ".");
        if (!validPassword) return res.status(401).json({ error: "Incorrect password!" });

        const token = await generateJWT(user.rows[0].id);
        res
            .status(201)
            .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: user.rows[0].id })
            .send;
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

// logout a user = deletes the jwt
app.get('/auth/logout', (req, res) => {
    console.log("'Delete jwt' request has arrived!");
    res.status(202).clearCookie('jwt').json({ "Msg": "Cookie cleared!" }).send
});

app.get('/posts', (req, res) => {
    verifyAuth(req, res);
    res.status(200).json({posts: serverPosts});
})

const verifyAuth = async (req, res) => {
    console.log('Authentication request has been arrived!');
    const token = req.cookies.jwt; // assign the token named jwt to the token const
    //console.log("token " + token);
    let authenticated = false; // a user is not authenticated until proven the opposite
    let userExists = false;
    try {
        // applies when the token does not exist
        if (!token) {
            console.log('Author is not authenticated!');
            res.send({ "authenticated": authenticated }); // authenticated = false
            return;
        }
        // checks if the token exists
        // jwt.verify(token, secretOrPublicKey, [options, callback]) verify a token
        await jwt.verify(token, secret, async (err) => { // token exists, now we try to verify it
            if (err) { // not verified, redirect to login page
                console.log(err.message);
                console.log('token is not verified');
                res.send({ "authenticated": authenticated }); // authenticated = false
                return;
            }
            // token exists and it is verified
            const jwtAsJson = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
            const userId = jwtAsJson.id;
            console.log(userId)
            // check if user with id exists
            if (userId) {
                 userExists = await pool.query("SELECT EXISTS (SELECT 1 FROM users WHERE id = $1)", [userId]);
            }
            if (!userExists.rows[0].exists) {
                console.log('User does not exist!');
                res.send({ "authenticated": authenticated }); // authenticated = false
                return;
            }
            console.log('Author is authenticated!');
            authenticated = true;
            res.send({ "authenticated": authenticated }); // authenticated = true
        })
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
}

app.get('/posts', async(req, res) => {
    try {
        console.log("'Get all posts' request has arrived!");
        const posts = await pool.query("SELECT * FROM posts");
        res.json(posts.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.post('/posts', async(req, res) => {
    try {
        console.log("A post request has arrived!");
        const post = req.body;
        const newpost = await pool.query(
            "INSERT INTO posts (datetime, post_title, post_content) values ($1, $2, $3) RETURNING*", [post.datetime, post.post_title, post.post_content]
        );
        res.json(newpost);
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/posts/:id', async(req, res) => {
    try {
        console.log("'Get a post' request has arrived!");
        const { id } = req.params;
        const posts = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
        res.json(posts.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.put('/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const post = req.body;
        console.log("'Update post' request has arrived!");
        const updatepost = await pool.query("UPDATE posts SET body = $2 WHERE id = $1 RETURNING*", [id, post.body]);
        res.json(updatepost);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete('/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        console.log("'Delete a post' request has arrived!");
        const deletepost = await pool.query("DELETE FROM posts WHERE id = $1 RETURNING*", [id]);
        res.json(deletepost);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete('/posts', async(req, res) => {
    try {
        console.log("'Delete all posts' request has arrived!");
        const deletepost = await pool.query("DELETE FROM posts");
        res.json(deletepost);
    } catch (err) {
        console.error(err.message);
    }
});

const serverPosts = [
    {
    "datetime": "10.10.2022",
    "post_title": "Afternoon library visit",
    "post_content": "Went to the University of Tartu Library for the first time today!",
    },
    {
        "datetime": "23.10.2022",
        "post_title": "WAD lecture room information",
        "post_content": "Anyone knows in which room is the lecture today?",
    },
    {
        "datetime": "04.08.2022",
        "post_title": "Books are life",
        "post_content": "Any book recommendations?",
    },
    {
        "datetime": "15.09.2022",
        "post_title": "Book recommendation",
        "post_content": "I really enjoyed 'Beautiful World, Where Are You' by Sally Rooney! ;)",
    },
    {
        "datetime": "23.10.2022",
        "post_title": "WAD lecture room clarification",
        "post_content": "Today it's in room 1008! ;)",
    },
    {
        "datetime": "22.10.2022",
        "post_title": "Pets are the cutest",
        "post_content": "Hey guys, do you have any pets? I have a rabbit.",
    },
    {
        "datetime": "31.10.2022",
        "post_title": "Pets are the cutest - I agree",
        "post_content": "Love your rabbit! I have 3 dogs :)",
    },
    {
        "datetime": "02.11.2022",
        "post_title": "Curious me",
        "post_content": "Tell me something I already don't know!",
    },
    {
        "datetime": "01.09.2022",
        "post_title": "Funniest joke I've ever heard",
        "post_content": "Funny joke - I would like to make the world a better place, but they won't give me the source code!",
    },
    {
        "datetime": "01.11.2022",
        "post_title": "Went to skydiving yesterday!",
        "post_content": "Check this out!",
    }
]