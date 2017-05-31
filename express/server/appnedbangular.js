var application_root = __dirname,
    express = require("express"),
    path = require("path");
var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');

var databaseUrl = '/home/gqq/MyProjects/nodejs/expression/db/user.db'; // "username:password@example.com/mydb"

var Datastore = require('nedb');
db = {};
db.users = new Datastore({ filename: databaseUrl, autoload: true });



var url = require("url");
var queryString = require("querystring");

var app = express();


// Config app.configure has expired.
// app.configure(function() {
//     app.use(express.bodyParser());
//     app.use(express.methodOverride());
//     app.use(app.router);
//     app.use(express.static(path.join(application_root, "public")));
//     app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
// });
// parse urlencoded request bodies into req.body
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded());

var env = process.env.NODE_ENV || 'development';
if ('development' === env) {
    //     // configure stuff here
    //     // app.use(express.bodyParser());
    //     app.use(express.methodOverride());
    //     // app.use(app.router);
    // app.use(express.static(path.join(application_root, "public")));
    //     // app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    // parse application/json
    app.use(methodOverride());
    app.use(bodyParser.json());
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));
    // parse multipart/form-data
    // app.use(multer());
    app.use(express.static(path.join(__dirname, 'public')));
}




app.get('/api', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send('Ecomm API is running');
});



app.get('/getangularusers', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    db.users.find({}, function(err, users) {
        if (err || !users) console.log("No users found");
        else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            str = '[';
            users.forEach(function(user) {
                str = str + '{ "name" : "' + user.username + '"},' + '\n';
            });
            str = str.trim();
            str = str.substring(0, str.length - 1);
            str = str + ']';
            console.log(str);
            res.end(str);
        }
    });
});

app.post('/insertangularneuser', function(req, res) {
    console.log("POST: ");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    console.log(req.body);
    console.log(req.body.mydata);
    var jsonData = JSON.parse(req.body.mydata);
    console.log(jsonData.username);
    console.log(jsonData.password);
    console.log(jsonData.email);

    db.users.insert({ email: jsonData.email, password: jsonData.password, username: jsonData.username }, function(err, saved) {
        if (err || !saved) res.end("User not saved");
        else res.end("User saved");
    });
});

app.listen(1212);
console.log("http://localhost:1212");
