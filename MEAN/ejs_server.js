var express = require('express');
var app = express();
// Now, Inside you server.js set the view Engine to ejs as follows
var bodyParser = require('body-parser');
var assert = require('assert')
    // app.get('/', function(req, res) {
    //     res.send('Hello world from sever.js');
    // })
    //

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
// Create a route for your app.
app.get('/testejs', function(req, res) {
    res.render('testejs', { user: "Great User", title: "homepage" });
});

app.get('/testejs2', function(req, res) {
    res.render('testejs', {users : [{ name: 'John' }, { name: 'Mike' }, { name: 'Samantha' }]});
});

app.listen(3000);
console.log("Server is running on port 3000");
