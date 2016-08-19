var express = require('express');
var app = express();

var mongojs = require("mongojs");
var db = mongojs("contactlist", ['contactlist']);

app.use(express.static(__dirname + "/public"));

app.get("/contactlist", function(req, res) {
    console.log("this is a get request");
    db.contactlist.find(function(err, docs) {
        console.log(docs);
        res.json(docs);
    })


});

app.listen(3000);
console.log("Server is running on port 3000");
