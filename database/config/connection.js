const mysql = require("mysql");

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "gamify",
});



module.exports = conn;
