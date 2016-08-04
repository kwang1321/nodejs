var http = require('http');
var express = require('express');
// express-namespace should be loaded before app is instantiated
var namespace = require('express-namespace');
var app = express();

app.get('/', function(req, res) {
    // Status and body in one line
    res.status(404).send('resource not found');
});

// curl -i -H "Accept: application/json" http://127.0.0.1:3000/headers { message: 'welcome' }
// use web browser, you can see the bord word - welcome.
app.namespace('/headers', function() {
    app.get('/', function(req, res) {
        res.format({
            'text/plain': function() {
                res.send('Plain text');
            },
            'text/html': function() {
                res.send('<b>welcome</b>');
            },
            'application/json': function() {
                res.json({ message: 'welcome' });
            },
            'default': function() {
                res.send(406, 'Not Acceptable');
            }
        });
    });
});
// app.use(app.router);
app.namespace('/gets', function() {
    app.get('/', function(req, res) {
        res.send("this is the root domin");
    });

    // http://127.0.0.1:3000/gets/sub
    app.get('/sub', function(req, res) {
        res.send("this is the gets/sub domin");
    });
});
// you should use test url as:
//              http://127.0.0.1:3000/posts/2014/jan/angularjs
//              http://127.0.0.1:3000/posts/2014/jan/
//              http://127.0.0.1:3000/posts/edit/1
//              http://127.0.0.1:3000/posts/
app.namespace('/posts', function() {
    app.get('/', function(req, res) {
        res.send('all posts');
    });
    app.get('/new', function(req, res) {
        res.send('new post');
    });
    app.get('/edit/:id', function(req, res) {
        res.send('edit post ' + req.params.id);
    });
    app.get('/delete/:id', function(req, res) {
        res.send('delete post ' + req.params.id);
    });
    app.get('/2013', function(req, res) {
        res.send('articles from 2014');
    });
    // Namespaces can be nested
    app.namespace('/2014/jan', function() {
        app.get('/', function(req, res) {
            res.send('posts from jan 2014');
        });
        app.get('/angularjs', function(req, res) {
            res.send('articles about Angular.js from jan 2014');
        });
    });
});
http.createServer(app).listen(3000, function() {
    console.log('App started');
});
