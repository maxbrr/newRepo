// main includes
const express = require("express");
const bodyParser = require("body-parser");
const { json } = require("body-parser");
const mysql = require("mysql");

//classes
const Test = require("./database/dbModels/Test.js");

// globals
const PORT = 8081;

// Routers

// express instance
const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.get("/", (req, res) => {
    const conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "123456",
        database: "gamify",
    });
    conn.connect();
    conn.query("SELECT * FROM test", (err, results, fields) => {
        if(err) { throw err; }
        res.send(results);
        res.end();
    });
});

app.get("/lastInsertId", (req, res) => {
    const conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "123456",
        database: "gamify",
    });
    conn.connect();
    conn.query("SELECT last_insert_id()", (error, results) => {
        if(error) { throw error; }
        res.send(results);
        res.end();
    });
});

app.get("/insert", (req, res) => {
    // const conn = require("./database/config/connection.js");
    // conn.connect();
    // conn.query( `INSERT INTO test (value)
    //             VALUES
    //             ('${req.query.v}')`, (error, results) => {
    //     if(error) { throw error; }
    //     res.send(results);
    //     res.end();
    // });

    const test = new Test();
    res.send(test.insertValue(req.query.v));

    
    res.end();

});

    


app.listen(PORT, () => {
    console.log(`Listning on port ${PORT}...`);
});