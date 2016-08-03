var http = require('http');
var ejs = require('ejs');
var csv = require('ya-csv');

var querystring = require('querystring');
var path = require('path');
var util = require('util');
var fs = require('fs');
require('../common/string.js');
var maxData = 2 * 1024 * 1024; //2mb


var mimeTypes = {
    '.js': 'text/javascript',
    '.html': 'text/html',
    '.css': 'text/css'
};


var cacheObj = {
    cachestore: {},
    maxSize: 26214400, //(bytes) 25mb
    maxAge: 5400 * 1000, //(ms) 1 and a half hours
    cleaninterval: 7200 * 1000, //(ms) two hours 
    cleanetimestart: 0, //to be set dynamically
    clean: function(now) {
        if ((now - this.cleaninterval) > this.cleanetimestart) {
            console.log('cleaning data...');
            this.cleanetimestart = now;
            var that = this;
            Object.keys(this.cachestore).forEach(function(file) {
                if (now > that.cachestore[file].timestamp + that.maxAge) {
                    delete that.cachestore[file];
                }
            });
        }
    }
};

http.createServer(function(request, response) {
    var lookup = path.basename(decodeURI(request.url)) || 'index.html',
        f = 'content/' + lookup;

    console.log("############## a new file is coming #################################")
    console.log("file name is " + f);
    console.log("request.method " + request.method);
    if (request.method === "POST") {
        var postData = '';
        request.on('data', function(chunk) {

            postData += chunk;
            console.log('postData.length-->>' + postData.length);
            if (postData.length > maxData) {
                postData = '';
                this.pause();
                response.writeHead(413); // Request Entity Too Large
                response.end('Too large');
            }

        }).on('end', function() {
            if (!postData) {
                response.end();
                return;
            } //prevents empty post requests from crashing the server
            var postDataObject = querystring.parse(postData);
            console.log("postData is " + postData);
            console.log("postDataObject is " + postDataObject);
            var writeCSVFile = csv.createCsvFileWriter('users.csv', { 'flags': 'a' });
            var data = [postDataObject.name, postDataObject.email, postDataObject.location, postDataObject.mobileno, postDataObject.notes];
            writeCSVFile.writeRecord(data);
            // writeCSVFile.writeRecord(['a','b','c','d','e']);
            console.log('User Posted 1234:\n', JSON.stringify(util.inspect(postDataObject)));

            var readerCSV = csv.createCsvFileReader('users.csv');
            var data = [];
            readerCSV.on('data', function(rec) {
                console.log('rec is ' + rec);
                data.push(rec);
            }).on('end', function() {
                console.log(data);
                ejs.renderFile('content/registeredusers.ejs', { users: data },
                    function(err, result) {
                        // render on success
                        //console.log("this is result part -->>"+result);
                        if (!err) {
                            response.end(result);
                        }
                        // render or error
                        else {
                            response.end('An error occurred');
                            console.log(err);
                        }
                    });
            });

        });
        return;
    }
    if (request.method === "GET") {
        fs.exists(f, function(exists) { //path.exists for Node 0.6 and below
            if (exists) {
                console.log('Content-type : ' + mimeTypes[path.extname(f)]);

                var headers = { 'Content-type': mimeTypes[path.extname(f)] };
                if (cacheObj.cachestore[f]) {
                    console.log('cache  deliver');
                    response.writeHead(200, headers);
                    response.end(cacheObj.cachestore[f].content);
                    return;
                }

                var s = fs.createReadStream(f).once('open', function() {
                    console.log('stream deliver');
                    response.writeHead(200, headers);
                    this.pipe(response);
                }).once('error', function(e) {
                    console.log(e);
                    response.writeHead(500);
                    response.end('Internal Server Error...');
                });

                fs.stat(f, function(err, stats) {
                    console.log("***** starting to save to cachestore *****")
                    console.log('filename is {2}, stats.size is {0}, cachestore.maxSize is {1}'.format(stats.size, cacheObj.maxSize, f));
                    if (stats.size < cacheObj.maxSize) {
                        var bufferOffset = 0;
                        cacheObj.cachestore[f] = {
                            content: new Buffer(stats.size),
                            timestamp: Date.now()
                        };
                        s.on('data', function(data) {
                            data.copy(cacheObj.cachestore[f].content, bufferOffset);
                            bufferOffset += data.length;
                        });
                    }
                    console.log("***** ending to save to cachestore *****")
                });
                return;
            } else if ('content/registeredusers.html' === f) {
                // modify by gqq, if f is 'content/registeredusers.html',
                // use the template 'content/registeredusers.ejs'
                console.log('right now we come to the else fork.');
                response.writeHead(200, { 'Content-Type': 'text/html' });
                var readerCSV = csv.createCsvFileReader('users.csv');
                var data = [];
                readerCSV.on('data', function(rec) {
                    data.push(rec);
                }).on('end', function() {
                    // console.log(data);
                    ejs.renderFile('content/registeredusers.ejs', { users: data },
                        function(err, result) {
                            // render on success
                            // console.log("this is result part -->>" + result);
                            console.log("the error is  -->>" + err);
                            if (!err) {
                                console.log("no error eccour");
                                console.log("this is result part -->>" + result);
                                // response.writeHead(200, { 'Content-Type': 'text/plain' });
                                response.end(result);
                            }
                            // render or error
                            else {
                                response.end('An error occurred');
                                console.log(err);
                            }
                        });
                });
                // Send the response body as "Hello World"
                // response.end(f);
                return;
            }
            response.writeHead(404); //no such file found!
            response.end('Page Not Found!');

        });

    }
    // cacheObj.clean(Date.now());
    console.log("############## end this file #################################\n\n")

}).listen(8080);

// Console will print the message
console.log('Server running at http://127.0.0.1:8080/');
