var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var assert = require('assert')
    // app.get('/', function(req, res) {
    //     res.send('Hello world from sever.js');
    // })
    //

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '10.1.4.23',
    user: 'root',
    password: 'root',
    database: 'bms'

});


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// get one item from id.
app.get("/chargedata", function(req, res) {
    // connection.connect();

    connection.query('SELECT * FROM bms.batteryData where battery_status=1 and ch_cur > 200 order by timestp desc limit 100', function(err, rows, fields) {
        if (!err){
            console.log('The solution is: ', rows);
            // console.log('The solution is: ', fields);
            // res.end('<html><body><h1>Hello, World!</h1></body></html>');
            res.json(rows);
        }
        else
            console.log('Error while performing Query.');

    });

    // connection.end();

});

// get one item from id.
app.get("/dischargedata", function(req, res) {
    // connection.connect();

    connection.query('SELECT * FROM bms.batteryData where battery_status=2 order by timestp desc limit 100', function(err, rows, fields) {
        if (!err){
            console.log('The solution is: ', rows);
            // console.log('The solution is: ', fields);
            // res.end('<html><body><h1>Hello, World!</h1></body></html>');
            res.json(rows);
        }
        else
            console.log('Error while performing Query.');

    });

    // connection.end();

});


app.listen(3000);
console.log("Server is running on port 3000");
