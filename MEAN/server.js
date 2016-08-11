var express = require('express');
var app = express();

var mongojs = require("mongojs");
var mongodb = require('mongodb');
var db = mongojs("contactlist", ['contactlist']);

var bodyParser = require('body-parser');
var assert = require('assert')
    // app.get('/', function(req, res) {
    //     res.send('Hello world from sever.js');
    // })
    //

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get("/contactlist", function(req, res) {
    console.log("this is a get request");

    db.contactlist.find(function(err, docs) {
        // console.log(docs);
        res.json(docs);
    })
});

// get one item from id.
app.get("/contactlist/:id", function(req, res) {
    var id = req.params.id;
    console.log("requset id is " + id);

    db.contactlist.findOne({ _id: mongojs.ObjectId(req.params.id) }, function(err, docs) {
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


app.put("/contactlist/:id", function(req, res) {
    console.log("###############this is put method##########################");
    console.log(req.params.id);
    console.log(req.body);
    db.contactlist.findAndModify({
        query: { _id: mongojs.ObjectId(req.params.id) },
        update: { $set: { name: req.body.name, email: req.body.email, number: req.body.number } },
        new: true
    }, function(err, docs) {
        console.log("update successfully");
        res.json(docs);
    });
});

//removecontact, you should use app.delete.
// app.post("/removecontact", function(req, res) {
//     console.log(req.body.id);
//     db.contactlist.remove({ "_id": new mongodb.ObjectID(req.body.id) }, function(err, docs) {
//         assert.equal(err, null);
//         console.log("remove successfully");
//         res.json(docs);
//     });
// });
app.delete("/removecontact/:id", function(req, res) {
    console.log(req.params.id);
    db.contactlist.remove({ _id: mongojs.ObjectId(req.params.id) }, function(err, docs) {
        res.json(docs);
    });
});

app.listen(3000);
console.log("Server is running on port 3000");
