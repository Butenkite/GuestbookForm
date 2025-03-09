import express from 'express';
import mariadb from 'mariadb';
import dotenv from 'dotenv';
import { validateForm } from './services/validation.js';


let data = [];

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

dotenv.config();

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

async function connect() {
    try {
        const conn = await pool.getConnection();
        console.log('Connected to the database!');
        return conn;
    } catch (err) {
        console.log(`Error connecting to the database ${err}`);
    }
}

const PORT = 3000;

app.get('/', (req, res) =>{
    res.render(`home`)
});


app.post('/confirmation', async(req,res) =>{

    const response = {
        first_name: req.body.fname,
        last_name: req.body.lname,
        job: req.body.job,
        company: req.body.company,
        linkedin: req.body.linkedin,
        email: req.body.email,
        how_meet: req.body.how_meet,
        content: req.body.content,
        add_me: req.body.mailing,
    };

    console.log(response);

    const result = validateForm(response);
    if (!result.isValid) {
        console.log(result.errors);
        res.send(result.errors);
        return;
    }

    //Connect to the database
    const conn = await connect();

    // Add the order to our database
    const insertQuery = await conn.query(`insert into responses 
        (first_name, last_name, job, company, linkedin, email, how_meet, content, add_me)
        values (?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        [ response.first_name, response.last_name, response.job, response.company,
            response.linkedin, response.email, response.how_meet, response.content, response.add_me ]);

    res.render('confirm', { response });
})

app.get('/admin', async(req, res) =>{
    const conn = await connect();
    const responses = await conn.query('SELECT * FROM responses')
    console.log(responses);
    res.render('summary', { responses });
});

app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}`);
})