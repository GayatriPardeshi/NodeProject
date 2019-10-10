// const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const router = express.Router();

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

pool.getConnection(function (err) {
  if (err) throw err;

  console.log('connected');
})

// Display all users
app.get('/users', (request, response) => {
  pool.query('SELECT * FROM customer', (error, result) => {
    if (error) throw error;

    response.send(result);
  });
});

app.get('/srcDisti', (req, resp) => {
  pool.query('select * from srcdestination', (err, result) => {
    if (err) throw err;
    resp.send(result);
  })
})

app.post("/insertCustomer", (req, resp) => {
  console.log("insert api");
  var sql = "insert into `customer` (`firstName`, `lastName`, `age`, `address`, `phoneNumberl`)" + " VALUES ('"+req.body.firstName+"','"+req.body.lastName+"', '"+req.body.age+"', '"+req.body.address+"', '"+req.body.phoneNumber+"' );"
  pool.query(sql, (err, result) => {
    if (err) throw err;
    resp.send(result);
  })
  console.log(req.body);
});

// function myFunction(p1, p2) {
//   return p1 * p2;
// }  
// console.log(myFunction(1,2));

app.listen(3000, function () {
  console.log("express server is running at 3000");
});

