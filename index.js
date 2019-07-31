// const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const routes = express.Router();



abcd = app.use(bodyParser.json());


var mysql = require("mysql");


const config = {
  host: 'localhost',
  user: 'root',
  password: 'gayatri1111',
  database: 'gayatri_db'
};

const pool = mysql.createPool(config);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// Display all users
app.get('/users', (request, response) => {
  pool.query('SELECT * FROM customer', (error, result) => {
    if (error) throw error;

    response.send(result);
  });
});

function myFunction(p1, p2) {
  return p1 * p2;
}
console.log(myFunction(1,2));

app.listen(3000, function () {
  console.log("express server is running at 3000");
});

