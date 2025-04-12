require("dotenv").config();
const express = require("express");
const {Pool} = require("pg");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

//POSTGRES Connections
const infoPool = new Pool({
    host: process.env.DB1_HOST,
    user: process.env.DB1_USER,
    password: process.env.DB1_PASSWORD,
    database: process.env.DB1_NAME,
    port: process.env.DB1_PORT,
});

const hobbiesPool = new Pool({
    host: process.env.DB2_HOST,
    user: process.env.DB2_USER,
    password: process.env.DB2_PASSWORD,
    database: process.env.DB2_NAME,
    port: process.env.DB2_PORT,
});

//GET information
app.get("/information", async (req, res)=> {
    try{
        const result = await infoPool.query("SELECT * FROM information");
        res.json(result.rows);
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});

app.post("/information", async(req,res) => {
    try{
        const {name, age, email, phone, hobbies} = req.body;

        const result = await infoPool.query(
            "INSERT INTO information (name, age, email, phone, hobbies) VALUES ($1,$2,$3,$4,$5) RETURNING *", [name, age, email, phone, hobbies]
        );

        res.status(201).json(result.rows[0]);
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

//Get hobbies
app.get("/hobbies", async (req, res)=> {
    try{
        const result = await hobbiesPool.query("SELECT * FROM hobbies");
        res.json(result.rows);
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});

app.post("/hobbies", async(req,res) => {
    try{
        const {hobby, description, category} = req.body;

        const result = await hobbiesPool.query(
            "INSERT INTO hobbies (hobby, description, category) VALUES ($1,$2,$3) RETURNING *", [hobby, description, category]
        );

        res.status(201).json(result.rows[0]);
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));