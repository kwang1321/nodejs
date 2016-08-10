var express = require('express');
var app = express();

var mongojs = require("mongojs");
var db = mongojs("contactlist", ['contactlist']);
// app.get('/', function(req, res) {
//     res.send('Hello world from sever.js');
// })
//

app.use(express.static(__dirname + "/public"));

app.get("/contactlist", function(req, res) {
    console.log("this is a get request");
//    person1 = {
//        name: 'Tim',
//        email: 'tim@email.com',
//        number: '(111) 111-1111'
//    };
//
//    person2 = {
//        name: 'Emily',
//        email: 'emily@email2.com',
//        number: '(222) 222-2222'
//    };
//
//    person3 = {
//        name: 'John',
//        email: 'john@email3.com',
//        number: '(333) 333-3333'
//    };
//
//    var contactList = [person1, person2, person3];
//    res.json(contactList);
    db.contactlist.find(function(err, docs){
        console.log(docs);
        res.json(docs);
    })


});

app.listen(3000);
console.log("Server is running on port 3000");
