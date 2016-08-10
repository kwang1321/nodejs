var express = require('express');
var app = express();

var mongojs = require("mongojs");
var db = mongojs("contactlist", ['contactlist']);

var bodyParser = require('body-parser');
// app.get('/', function(req, res) {
//     res.send('Hello world from sever.js');
// })
//

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get("/contactlist", function(req, res) {
    console.log("this is a get request");

    db.contactlist.find(function(err, docs) {
        console.log(docs);
        res.json(docs);
    })
});

app.post("/contactlist", function(req, res) {
    console.log(req.body);
    db.contactlist.insert(req.body, function(err, docs) {
        console.log("insert successfully");
        res.json(docs);
    });
});
app.listen(3000);
console.log("Server is running on port 3000");
