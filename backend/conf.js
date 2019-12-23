require("dotenv").config();
const mysql = require("mysql");

const port = process.env.DB_PORT;

// Setup database connection
const connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST, // db server address
  user: process.env.DB_USER, // db user's name
  password: process.env.DB_PASSWORD, // db user's password
  database: process.env.DB_DATABASE, // db name
});

module.exports = { connection, port };
