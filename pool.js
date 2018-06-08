let pg = require("pg");

let pool = new pg.Pool({
    user: "postgres",
    password: "kelly",
    host: "localhost",
    port: 8080,
    database: "cart2",
    ssl: "false"

});

module.exports = pool;




// database name "cart2" comes from postgres
// this is module that lets talk to your database
// express router 

// var name for what call postgress thing

// pool.queries

// everything we covered in lecture today lives here